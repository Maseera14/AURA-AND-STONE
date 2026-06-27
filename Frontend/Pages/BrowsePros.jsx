import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import ProCard from '../Components/ProCard';
import FilterDropdown from '../Components/FilterDropdown';
import InteractiveMap from '../Components/InteractiveMap';
import QuoteEstimator from '../Components/QuoteEstimator';

export default function BrowsePros({ onNavigate, initialSector = "All Sectors" }) {
    const [filteredPros, setFilteredPros] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [currentLocation, setCurrentLocation] = useState("Wayne, NE");
    const [activeSector, setActiveSector] = useState(initialSector);

    // Core API Fetch Execution (Connecting to port 5000)
    const fetchProfessionalsFromAPI = async (locationContext = "", keywordContext = "", sectorContext = "") => {
        setIsSearching(true);
        try {
            let url = `http://localhost:5000/api/v1/professionals?location=${locationContext}&keyword=${keywordContext}`;
            if (sectorContext && sectorContext !== 'All Sectors') {
                url += `&sector=${sectorContext}`;
            }

            const response = await fetch(url);
            const payload = await response.json();

            if (payload.success) {
                setFilteredPros(payload.data);
            }
        } catch (error) {
            console.error("API Fetch Integration Crash:", error);
        } finally {
            setIsSearching(false);
        }
    };

    // Initial stream loader hook trigger
    useEffect(() => {
        setActiveSector(initialSector);
        fetchProfessionalsFromAPI(currentLocation, "", initialSector);
    }, [initialSector]);

    const handleSearchExecution = ({ location, keyword }) => {
        setCurrentLocation(location || "Wayne, NE");
        fetchProfessionalsFromAPI(location, keyword, activeSector);
    };

    const handleSectorFilter = (selectedSector) => {
        setActiveSector(selectedSector);
        fetchProfessionalsFromAPI(currentLocation, "", selectedSector);
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

                    {isSearching ? (
                        <div style={{ padding: '100px 0', textAlign: 'center', color: 'var(--accent-brass)', fontFamily: 'Cinzel', letterSpacing: '2px' }}>
                            QUERYING STREAM FROM PORT 5000...
                        </div>
                    ) : filteredPros.length === 0 ? (
                        <div style={{ padding: '100px 0', textAlign: 'center', color: 'var(--text-muted)' }}>
                            No premium entities indexed inside MongoDB matching current parameters.
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