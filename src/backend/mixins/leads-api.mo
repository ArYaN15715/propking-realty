import List "mo:core/List";
import LeadsLib "../lib/leads";
import LeadTypes "../types/leads";

mixin (leads : List.List<LeadTypes.LeadForm>, nextLeadId : { var value : Nat }) {
  public func submitLead(input : LeadTypes.LeadFormInput) : async Nat {
    let id = LeadsLib.submit(leads, nextLeadId.value, input);
    nextLeadId.value += 1;
    id;
  };

  public query func getLeads() : async [LeadsLib.LeadForm] {
    LeadsLib.getAll(leads);
  };
};
