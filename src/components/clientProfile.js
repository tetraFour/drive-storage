import React from "react";
import ClientNav from "./client-profile-components/clientNav";
import ClientCalendar from "./client-profile-components/clientCalendar";
import ClientTasks from "./client-profile-components/clientTasks";
import ClientStorage from "./client-profile-components/clientStorage";

function ClientProfile() {
  return (
    <section className="client-profile">
      <ClientNav />
      <ClientCalendar />
      <ClientTasks />
      <ClientStorage />
    </section>
  );
}

export default ClientProfile;
