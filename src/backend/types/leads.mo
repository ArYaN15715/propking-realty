import Common "common";

module {
  public type LeadFormInput = {
    formType : Text;
    name : Text;
    phone : Text;
    email : Text;
    budget : ?Text;
    propertyType : ?Text;
    location : ?Text;
    visitDate : ?Text;
    message : ?Text;
    contactTime : ?Text;
  };

  public type LeadForm = {
    id : Nat;
    formType : Text;
    name : Text;
    phone : Text;
    email : Text;
    budget : ?Text;
    propertyType : ?Text;
    location : ?Text;
    visitDate : ?Text;
    message : ?Text;
    contactTime : ?Text;
    timestamp : Common.Timestamp;
  };
};
