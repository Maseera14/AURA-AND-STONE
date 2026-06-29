import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import ProCard from '../Components/ProCard';
import FilterDropdown from '../Components/FilterDropdown';
import InteractiveMap from '../Components/InteractiveMap';
import QuoteEstimator from '../Components/QuoteEstimator';
import { professionals as localProfessionals } from '../Data/professionals.js';

export default function BrowsePros({ onNavigate, initialSector = "All Sectors" }) {
    const [filteredPros, setFilteredPros] = useState(localProfessionals);
    const [currentLocation, setCurrentLocation] = useState("Wayne, NE");
    const [activeSector, setActiveSector] = useState(initialSector);
    const [searchKeyword, setSearchKeyword] = useState("");

    // Offline filter execution
    const filterProfessionals = (locationContext = "Wayne, NE", keywordContext = "", sectorContext = "All Sectors") => {
        let result = [...localProfessionals];

        // 1. Filter by location (case-insensitive substring match)
        if (locationContext) {
            const locNorm = locationContext.toLowerCase().trim();
            result = result.filter(pro => pro.location.toLowerCase().includes(locNorm));
        }

        // 2. Filter by sector
        if (sectorContext && sectorContext !== 'All Sectors') {
            result = result.filter(pro => pro.sector === sectorContext);
        }

        // 3. Filter by keyword (matches name, specialty, or bio)
        if (keywordContext) {
            const kwNorm = keywordContext.toLowerCase().trim();
            result = result.filter(pro => 
                pro.name.toLowerCase().includes(kwNorm) ||
                pro.specialty.toLowerCase().includes(kwNorm) ||
                pro.bio.toLowerCase().includes(kwNorm)
            );
        }

        setFilteredPros(result);
    };

    // Initial stream loader hook trigger
    useEffect(() => {
        setActiveSector(initialSector);
        filterProfessionals(currentLocation, searchKeyword, initialSector);
    }, [initialSector]);

    const handleSearchExecution = ({ location, keyword }) => {
        const loc = location || "Wayne, NE";
        setCurrentLocation(loc);
        setSearchKeyword(keyword || "");
        filterProfessionals(loc, keyword || "", activeSector);
    };

    const handleSectorFilter = (selectedSector) => {
        setActiveSector(selectedSector);
        filterProfessionals(currentLocation, searchKeyword, selectedSector);
    };

    return (
        <div className="browse-container" style={{ padding: '40px 50px', minHeight: '100vh', maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>

                {/* LEFT COLUMN */}
                <div style={{ flex: '2 1 60%', minWidth: '280px' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <span style={{ color: 'var(--accent-brass)', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase' }}>
                            Bespoke Networking Pipeline
                        </span>
                        <h2 className="font-luxury" style={{ fontSize: '36px', color: '#fff', marginTop: '5px' }}>
                            ARCHITECTURAL INDEX
                        </h2>
                    </div>

                    <SearchBar onSearchSubmit={handleSearchExecution} />

                    <div style={{ marginBottom: '40px', marginTop: '-10px', display: 'flex', justifyContent: 'flex-start' }}>
                        <FilterDropdown onFilterChange={handleSectorFilter} />
                    </div>

                    {filteredPros.length === 0 ? (
                        <div style={{ padding: '100px 0', textAlign: 'center', color: 'var(--text-muted)' }}>
                            No premium entities indexed matching current parameters.
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
                            {filteredPros.map((pro) => (
                                <ProCard 
                                    key={pro._id || pro.id} 
                                    data={pro} 
                                    onCardClick={(selected) => onNavigate && onNavigate('pro-profile', selected)}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* RIGHT COLUMN */}
                <div style={{ flex: '1 1 30%', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <InteractiveMap currentZone={currentLocation} />
                    <QuoteEstimator />
                </div>

            </div>
        </div>
    );
}