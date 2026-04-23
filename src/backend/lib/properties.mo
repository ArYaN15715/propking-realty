import List "mo:core/List";
import Array "mo:core/Array";
import Types "../types/properties";

module {
  public type Property = Types.Property;

  public func seed() : List.List<Property> {
    let props = List.empty<Property>();
    let data : [Property] = [
      {
        id = 1;
        title = "Luxury 3BHK Apartment";
        location = "SG Highway, Ahmedabad";
        price = 8500000;
        priceDisplay = "₹85 Lac";
        propertyType = "Flat";
        tags = ["Premium", "Ready"];
        imageUrl = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800";
        description = "Spacious 3BHK apartment with modern finishes, overlooking the SG Highway corridor. Close to top schools, malls, and hospitals.";
        amenities = ["Swimming Pool", "Gym", "Parking", "24x7 Security", "Power Backup"];
        bedrooms = 3;
        bathrooms = 3;
        area = 1650;
        status = "Ready to Move";
      },
      {
        id = 2;
        title = "Premium 2BHK Near Science City";
        location = "Science City, Ahmedabad";
        price = 5500000;
        priceDisplay = "₹55 Lac";
        propertyType = "Flat";
        tags = ["Investment", "Ready"];
        imageUrl = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800";
        description = "Well-connected 2BHK apartment in the rapidly growing Science City corridor. Ideal for working professionals and investors.";
        amenities = ["Club House", "Parking", "Lift", "Security", "Garden"];
        bedrooms = 2;
        bathrooms = 2;
        area = 1100;
        status = "Ready to Move";
      },
      {
        id = 3;
        title = "Independent Villa";
        location = "Bopal, Ahmedabad";
        price = 18000000;
        priceDisplay = "₹1.8 Cr";
        propertyType = "Villa";
        tags = ["Premium", "Ready"];
        imageUrl = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800";
        description = "Gorgeous independent villa in Bopal with private garden, modern interiors, and a double garage. Perfect for families seeking space and luxury.";
        amenities = ["Private Garden", "Double Garage", "Terrace", "Modular Kitchen", "Smart Home"];
        bedrooms = 4;
        bathrooms = 4;
        area = 3200;
        status = "Ready to Move";
      },
      {
        id = 4;
        title = "Commercial Plot";
        location = "Prahlad Nagar, Ahmedabad";
        price = 12000000;
        priceDisplay = "₹1.2 Cr";
        propertyType = "Plot";
        tags = ["Investment"];
        imageUrl = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800";
        description = "Prime commercial plot in Prahlad Nagar with excellent frontage and high footfall. Ideal for retail or office development.";
        amenities = ["Corner Plot", "Road Facing", "All Utilities Available"];
        bedrooms = 0;
        bathrooms = 0;
        area = 2400;
        status = "Available";
      },
      {
        id = 5;
        title = "Affordable 1BHK Studio";
        location = "Satellite, Ahmedabad";
        price = 4500000;
        priceDisplay = "₹45 Lac";
        propertyType = "Flat";
        tags = ["Investment", "Ready"];
        imageUrl = "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800";
        description = "Compact and smart 1BHK studio apartment in Satellite. Excellent rental yield potential. Fully furnished option available.";
        amenities = ["Parking", "Lift", "Security", "Water Supply"];
        bedrooms = 1;
        bathrooms = 1;
        area = 620;
        status = "Ready to Move";
      },
      {
        id = 6;
        title = "Spacious 4BHK Penthouse";
        location = "SG Highway, Ahmedabad";
        price = 25000000;
        priceDisplay = "₹2.5 Cr";
        propertyType = "Flat";
        tags = ["Premium"];
        imageUrl = "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800";
        description = "Ultra-premium penthouse on the 22nd floor with panoramic city views. Private terrace, imported fittings, and a dedicated concierge service.";
        amenities = ["Private Terrace", "Jacuzzi", "Home Theater", "Smart Automation", "Concierge"];
        bedrooms = 4;
        bathrooms = 5;
        area = 4200;
        status = "Under Construction";
      },
      {
        id = 7;
        title = "Residential Plot in Growth Zone";
        location = "Bopal, Ahmedabad";
        price = 6500000;
        priceDisplay = "₹65 Lac";
        propertyType = "Plot";
        tags = ["Investment"];
        imageUrl = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800";
        description = "North-facing residential plot in Bopal's fast-growing sector. Clean title, RERA approved layout, corner location.";
        amenities = ["RERA Approved", "Corner Location", "Wide Road", "Drainage Facility"];
        bedrooms = 0;
        bathrooms = 0;
        area = 1800;
        status = "Available";
      },
      {
        id = 8;
        title = "Modern 3BHK with Club Access";
        location = "Prahlad Nagar, Ahmedabad";
        price = 11000000;
        priceDisplay = "₹1.1 Cr";
        propertyType = "Flat";
        tags = ["Premium", "Ready"];
        imageUrl = "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800";
        description = "Premium 3BHK flat in an exclusive society with full club facility access, landscape gardens, and a business lounge.";
        amenities = ["Club House", "Rooftop Pool", "Business Lounge", "Kids Play Area", "Vastu Compliant"];
        bedrooms = 3;
        bathrooms = 3;
        area = 1900;
        status = "Ready to Move";
      },
      {
        id = 9;
        title = "2BHK Investment Apartment";
        location = "Science City, Ahmedabad";
        price = 6200000;
        priceDisplay = "₹62 Lac";
        propertyType = "Flat";
        tags = ["Investment", "Ready"];
        imageUrl = "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800";
        description = "Well-designed 2BHK apartment in the Science City growth corridor. Rental demand is high due to proximity to tech parks and hospitals.";
        amenities = ["Parking", "Gym", "Security", "Backup Power", "CCTV"];
        bedrooms = 2;
        bathrooms = 2;
        area = 1050;
        status = "Ready to Move";
      },
      {
        id = 10;
        title = "Luxury Row Villa";
        location = "Satellite, Ahmedabad";
        price = 22000000;
        priceDisplay = "₹2.2 Cr";
        propertyType = "Villa";
        tags = ["Premium"];
        imageUrl = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800";
        description = "Elegant row villa with private courtyard and rooftop deck. Located in a gated community with landscaped streets and a community clubhouse.";
        amenities = ["Private Courtyard", "Rooftop Deck", "Modular Kitchen", "Home Office", "EV Charging"];
        bedrooms = 4;
        bathrooms = 4;
        area = 3600;
        status = "Under Construction";
      },
      {
        id = 11;
        title = "Compact 1BHK Near Metro";
        location = "Bopal, Ahmedabad";
        price = 4800000;
        priceDisplay = "₹48 Lac";
        propertyType = "Flat";
        tags = ["Ready", "Investment"];
        imageUrl = "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800";
        description = "Efficiently designed 1BHK apartment near the proposed metro corridor. High capital appreciation expected. Best for first-time buyers.";
        amenities = ["Parking", "Lift", "24x7 Water Supply", "Intercom"];
        bedrooms = 1;
        bathrooms = 1;
        area = 680;
        status = "Ready to Move";
      },
      {
        id = 12;
        title = "Commercial Office Space";
        location = "Prahlad Nagar, Ahmedabad";
        price = 15000000;
        priceDisplay = "₹1.5 Cr";
        propertyType = "Plot";
        tags = ["Investment", "Premium"];
        imageUrl = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800";
        description = "Ready-to-occupy commercial office floor in a prestigious Prahlad Nagar building. Ideal for corporate HQ or professional services firm.";
        amenities = ["Dedicated Parking", "High-speed Internet", "24x7 AC", "Cafeteria", "Conference Rooms"];
        bedrooms = 0;
        bathrooms = 2;
        area = 2800;
        status = "Ready to Move";
      },
      {
        id = 13;
        title = "3BHK Vastu-Compliant Flat";
        location = "SG Highway, Ahmedabad";
        price = 9500000;
        priceDisplay = "₹95 Lac";
        propertyType = "Flat";
        tags = ["Ready"];
        imageUrl = "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800";
        description = "Thoughtfully designed 3BHK apartment with strict Vastu compliance, east-facing orientation, and lush community greens.";
        amenities = ["Yoga Deck", "Meditation Garden", "Parking", "Backup Generator", "Society Hall"];
        bedrooms = 3;
        bathrooms = 2;
        area = 1750;
        status = "Ready to Move";
      },
      {
        id = 14;
        title = "Plot in RERA Township";
        location = "Science City, Ahmedabad";
        price = 8800000;
        priceDisplay = "₹88 Lac";
        propertyType = "Plot";
        tags = ["Investment"];
        imageUrl = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800";
        description = "RERA registered plot in a master-planned township with all amenities already in place. Flexible payment plan available.";
        amenities = ["RERA Registered", "Township Amenities", "Wide Roads", "Parks", "Underground Utilities"];
        bedrooms = 0;
        bathrooms = 0;
        area = 2000;
        status = "Available";
      },
      {
        id = 15;
        title = "Heritage Bungalow Restoration";
        location = "Satellite, Ahmedabad";
        price = 32000000;
        priceDisplay = "₹3.2 Cr";
        propertyType = "Villa";
        tags = ["Premium"];
        imageUrl = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800";
        description = "Rare heritage bungalow beautifully restored with modern amenities while retaining original architectural character. Once-in-a-lifetime opportunity.";
        amenities = ["Heritage Architecture", "Pool", "Lawns", "6-Car Parking", "Staff Quarters"];
        bedrooms = 5;
        bathrooms = 5;
        area = 6000;
        status = "Available";
      },
    ];
    for (p in data.vals()) { props.add(p) };
    props;
  };

  public func getAll(properties : List.List<Property>) : [Property] {
    properties.toArray();
  };

  public func getById(properties : List.List<Property>, id : Nat) : ?Property {
    properties.find(func(p) { p.id == id });
  };

  public func getByType(properties : List.List<Property>, propertyType : Text) : [Property] {
    let lower = propertyType.toLower();
    properties.filter(func(p) { p.propertyType.toLower() == lower }).toArray();
  };

  public func getByLocation(properties : List.List<Property>, location : Text) : [Property] {
    let lower = location.toLower();
    properties.filter(func(p) { p.location.toLower().contains(#text lower) }).toArray();
  };

  public func getByIds(properties : List.List<Property>, ids : [Nat]) : [Property] {
    properties.filter(func(p) {
      ids.find(func(id) { id == p.id }) != null
    }).toArray();
  };
};
