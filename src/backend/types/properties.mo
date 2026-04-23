module {
  public type Property = {
    id : Nat;
    title : Text;
    location : Text;
    price : Nat;
    priceDisplay : Text;
    propertyType : Text;
    tags : [Text];
    imageUrl : Text;
    description : Text;
    amenities : [Text];
    bedrooms : Nat;
    bathrooms : Nat;
    area : Nat;
    status : Text;
  };
};
