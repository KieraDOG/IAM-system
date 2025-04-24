import { useState } from "react";
import CreateIAMModal from "./components/CreateIAMModal";
import Header from "./components/Header";
import Roles from "./components/Roles";
import UnassignedUsers from "./components/UnassignedUsers";
import { IAMProvider } from "./components/IAM";

const App = () => {
  const [isCreateIAMModalOpen, setIsCreateIAMModalOpen] = useState(false);

  const [isDraggingIAM, setIsDraggingIAM] = useState(null);

  return (
    <IAMProvider>
      <div className="max-w-[1280px] mx-auto py-16">
        <Header onNewIAMClick={() => setIsCreateIAMModalOpen(true)} />
        <div className="flex mt-8 gap-8">
          <div className="basis-2/3">
            <Roles
              placeholder={isDraggingIAM}
              onDragIdentity={(role, identity) =>
                setIsDraggingIAM({
                  type: "user",
                  source: role,
                  value: identity,
                })
              }
              onDragRole={(source, role) =>
                setIsDraggingIAM({ type: "role", source, value: role })
              }
            />
          </div>
          <div className="basis-1/3">
            <UnassignedUsers
              onDragIdentity={(identity) =>
                setIsDraggingIAM({
                  type: "user",
                  source: "UnassignedUsers",
                  value: identity,
                })
              }
              placeholder={isDraggingIAM}
            />
          </div>
        </div>
        <CreateIAMModal
          isOpen={isCreateIAMModalOpen}
          onClose={() => setIsCreateIAMModalOpen(false)}
        />
      </div>
    </IAMProvider>
  );
};

export default App;
