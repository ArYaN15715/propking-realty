import List "mo:core/List";
import PropertiesLib "../lib/properties";
import PropertyTypes "../types/properties";

mixin (properties : List.List<PropertyTypes.Property>) {
  public query func getProperties() : async [PropertiesLib.Property] {
    PropertiesLib.getAll(properties);
  };

  public query func getPropertyById(id : Nat) : async ?PropertiesLib.Property {
    PropertiesLib.getById(properties, id);
  };

  public query func getPropertiesByType(propertyType : Text) : async [PropertiesLib.Property] {
    PropertiesLib.getByType(properties, propertyType);
  };

  public query func getPropertiesByLocation(location : Text) : async [PropertiesLib.Property] {
    PropertiesLib.getByLocation(properties, location);
  };

  public query func getPropertiesByIds(ids : [Nat]) : async [PropertiesLib.Property] {
    PropertiesLib.getByIds(properties, ids);
  };
};
