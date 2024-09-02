import React from "react";
import { RiVoiceprintLine } from "react-icons/ri";
import ControlDiv from "../../components/Voice Library Components/ControlDiv";
import PrivateVoices from "../../components/Voice Library Components/PrivateVoices";
import PublicVoices from "../../components/Voice Library Components/PublicVoices";

const VoiceLibrary = () => {
  return (
    <div className="bg-[#191E24] w-full h-screen">
      <div className="flex items-center gap-2 w-full">
        <RiVoiceprintLine className="w-8 h-8 p-2 rounded-lg bg-[#1D232A]" />
        <p className="text-lg font-semibold">Voice Library</p>
      </div>
      <div className="p-5 flex flex-col gap-y-5">
        <ControlDiv />
        <PrivateVoices />
        <PublicVoices />
      </div>
    </div>
  );
};

export default VoiceLibrary;
