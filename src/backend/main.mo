import List "mo:core/List";
import PropertyTypes "types/properties";
import LeadTypes "types/leads";
import PropertiesLib "lib/properties";
import PropertiesApi "mixins/properties-api";
import LeadsApi "mixins/leads-api";

actor {
  let properties : List.List<PropertyTypes.Property> = PropertiesLib.seed();
  let leads : List.List<LeadTypes.LeadForm> = List.empty<LeadTypes.LeadForm>();
  let nextLeadId = { var value : Nat = 1 };

  include PropertiesApi(properties);
  include LeadsApi(leads, nextLeadId);
};
