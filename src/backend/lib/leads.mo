import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/leads";

module {
  public type LeadForm = Types.LeadForm;
  public type LeadFormInput = Types.LeadFormInput;

  public func submit(
    leads : List.List<LeadForm>,
    nextId : Nat,
    input : LeadFormInput,
  ) : Nat {
    let lead : LeadForm = {
      id = nextId;
      formType = input.formType;
      name = input.name;
      phone = input.phone;
      email = input.email;
      budget = input.budget;
      propertyType = input.propertyType;
      location = input.location;
      visitDate = input.visitDate;
      message = input.message;
      contactTime = input.contactTime;
      timestamp = Time.now();
    };
    leads.add(lead);
    nextId;
  };

  public func getAll(leads : List.List<LeadForm>) : [LeadForm] {
    leads.toArray();
  };
};
