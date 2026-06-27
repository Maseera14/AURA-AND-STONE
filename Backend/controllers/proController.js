// Backend/controllers/proController.js
import Professional from '../models/Professional.js';

// Fallback high-tier professional database in memory for zero-config startup
const fallbackProfessionals = [
    {
        _id: "60c72b2f9b1d8b22a45d0111",
        id: 1,
        name: "Vertex Arc Studios",
        rating: 4.9,
        projectsCount: 54,
        specialty: "Brutalist Megastructures & Minimalist Villa Designs",
        location: "Wayne, NE",
        startingBudget: 120000,
        sector: "Residential Megastructures",
        bio: "Pioneering brutalist structures and ultra-minimalist residential facades across Nebraska. Focused on raw concrete materials, glass cantilevers, and high-precision structural integrity. Delivering iconic landmark residences.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "Project Obsidian - Concrete Cantilever Villa",
            "The Concrete Monolith - Minimalist Living",
            "Aura Residence - Brutalist Oasis"
        ]
    },
    {
        _id: "60c72b2f9b1d8b22a45d0222",
        id: 2,
        name: "Nebraska Eco-Framing Co.",
        rating: 4.7,
        projectsCount: 29,
        specialty: "High-Tier Sustainable Residential Builds",
        location: "Omaha, NE",
        startingBudget: 65000,
        sector: "Sustainable/Green Architecture",
        bio: "Delivering state-wide green infrastructure blueprints with optimized load metrics and energy-neutral materials. Specialized in sustainable residential builds and LEED certified frameworks.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "The Eco-Ridge Estate - Solar Grid Roofs",
            "Net-Zero Commercial Pavilion - Sustainable Steel",
            "The Green Canopy Hub - Rainwater Ingestion"
        ]
    },
    {
        _id: "60c72b2f9b1d8b22a45d0333",
        id: 3,
        name: "Midwest Steel & Tower",
        rating: 5.0,
        projectsCount: 42,
        specialty: "Commercial High-Rise & Heavy Steel Framing",
        location: "Lincoln, NE",
        startingBudget: 350000,
        sector: "Commercial High-Rise",
        bio: "Delivering state-of-the-art multi-story commercial corporate headquarters and residential high-rises. Engineered to survive earthquakes with premium aesthetic glass curtain walls.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "Lincoln Corporate Hub - Glass Curtain Walls",
            "The Steel Lattice Tower - Heavy Grid Frameworks",
            "Vertex Plaza - Cantilever Decking"
        ]
    },
    {
        _id: "60c72b2f9b1d8b22a45d0444",
        id: 4,
        name: "Heritage Builders NE",
        rating: 4.8,
        projectsCount: 31,
        specialty: "Heritage Conservation & Historic Building Restorations",
        location: "Norfolk, NE",
        startingBudget: 150000,
        sector: "Heritage Restoration",
        bio: "Over three generations of restoring iconic historical facades, colonial-era architecture, and heritage sites across Nebraska. Combining traditional craftsmanship with modern foundation reinforcement technologies.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "Colonial Facade Restoration",
            "The Heritage Courtyard - Restored Archways",
            "Ancient Arch Stabilization - Foundation Overhaul"
        ]
    },
    {
        _id: "60c72b2f9b1d8b22a45d0555",
        id: 5,
        name: "Prairie Landscape Architects",
        rating: 4.6,
        projectsCount: 18,
        specialty: "Bespoke Biophilic Gardens & Outdoor Retaining Pools",
        location: "Wayne, NE",
        startingBudget: 45000,
        sector: "Bespoke Landscape Design",
        bio: "Transforming outdoor environments into luxury biophilic sanctuaries. We specialize in infinity pools, natural stone patios, custom outdoor fire pits, and zero-maintenance local flora design.",
        image: "https://images.unsplash.com/photo-1558603668-6570496b66f8?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "The Oasis Deck - Natural Stone Paving",
            "Zen Courtyard Retreat - Japanese Bonsai & Waterfalls",
            "Symphony Stone Garden - Biophilic Retaining Pool"
        ]
    },
    {
        _id: "60c72b2f9b1d8b22a45d0666",
        id: 6,
        name: "Sharp Construction Inc.",
        rating: 4.9,
        projectsCount: 42,
        specialty: "Premium Structural Framing & Commercial Assets",
        location: "Wayne, NE",
        startingBudget: 55000,
        sector: "Residential Megastructures",
        bio: "Operating elite structural builds from 704 Sherman St, Wayne, Nebraska. Specialized in premium structural layouts, heavy timber frames, and turnkey corporate architectural solutions.",
        image: "https://images.unsplash.com/photo-1503387762-592ded58c45a?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "Sherman Center - Commercial Framing",
            "Wayne Residential Villa - Engineered Wood Joints"
        ]
    }
];

// @desc    Get all premium professionals with advanced telemetry filters (GET)
// @route   GET /api/professionals
// @access  Public
export const getProfessionals = async (req, res) => {
    try {
        const { location, keyword, sector, minBudget } = req.query;
        let professionalsList = [];

        // Attempt MongoDB Fetch
        try {
            let dbQuery = {};
            if (location) {
                dbQuery.location = { $regex: location, $options: 'i' };
            }
            if (sector && sector !== 'All Sectors') {
                dbQuery.sector = { $regex: `^${sector}$`, $options: 'i' };
            }
            if (keyword) {
                dbQuery.$or = [
                    { name: { $regex: keyword, $options: 'i' } },
                    { specialty: { $regex: keyword, $options: 'i' } },
                    { bio: { $regex: keyword, $options: 'i' } }
                ];
            }
            if (minBudget) {
                dbQuery.startingBudget = { $gte: parseInt(minBudget) };
            }

            professionalsList = await Professional.find(dbQuery);
        } catch (dbError) {
            console.warn("MongoDB connection unavailable. Streaming fallback memory telemetry...");
        }

        // Fallback to static list if database query fails or returns empty
        if (!professionalsList || professionalsList.length === 0) {
            professionalsList = [...fallbackProfessionals];
            if (location) {
                professionalsList = professionalsList.filter(pro =>
                    pro.location.toLowerCase().includes(location.toLowerCase())
                );
            }
            if (sector && sector !== 'All Sectors') {
                professionalsList = professionalsList.filter(pro =>
                    pro.sector.toLowerCase() === sector.toLowerCase()
                );
            }
            if (keyword) {
                professionalsList = professionalsList.filter(pro =>
                    pro.specialty.toLowerCase().includes(keyword.toLowerCase()) ||
                    pro.name.toLowerCase().includes(keyword.toLowerCase()) ||
                    pro.bio.toLowerCase().includes(keyword.toLowerCase())
                );
            }
            if (minBudget) {
                professionalsList = professionalsList.filter(pro => pro.startingBudget >= parseInt(minBudget));
            }
        }

        res.status(200).json({
            success: true,
            count: professionalsList.length,
            timestamp: new Date().toISOString(),
            data: professionalsList
        });

    } catch (error) {
        res.status(500).json({ success: false, error: 'Spatial query computation crash: ' + error.message });
    }
};

// @desc    Get singular profile details (GET)
// @route   GET /api/professionals/:id
export const getProfessionalById = async (req, res) => {
    try {
        const { id } = req.params;
        let professional = null;

        // Try DB query
        try {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                professional = await Professional.findById(id);
            }
        } catch (dbError) {
            console.warn("MongoDB query failed for ID. Attempting memory lookup...");
        }

        // Fallback lookup
        if (!professional) {
            professional = fallbackProfessionals.find(p => p.id.toString() === id || p._id === id);
        }

        if (!professional) {
            return res.status(404).json({ success: false, error: "Professional not found in telemetry registries." });
        }

        res.status(200).json({
            success: true,
            data: professional
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Profile fetch error: ' + error.message });
    }
};