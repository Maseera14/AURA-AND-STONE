// Backend/seed.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Professional from './models/Professional.js';

dotenv.config();

const mockUSLuxuryPros = [
    {
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

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected for US telemetry seeding...");

        await Professional.deleteMany();
        console.log("Old Pakistan operational zones wiped clean.");

        await Professional.insertMany(mockUSLuxuryPros);
        console.log("🚀 Sharp Construction & Nebraska dataset nodes successfully injected inside MongoDB!");

        process.exit();
    } catch (error) {
        console.error(`US mapping seed crash: ${error.message}`);
        process.exit(1);
    }
};

seedDatabase();