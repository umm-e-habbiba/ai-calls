import React from "react";
import { RiVoiceprintLine } from "react-icons/ri";
import ControlDiv from "../../components/Voice Library Components/ControlDiv";
import PrivateVoicesAccordion from "../../components/Voice Library Components/PrivateVoicesAccordion";
import PublicVoicesAccordion from "../../components/Voice Library Components/PublicVoicesAccordion";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import PrivateVoices from "../../components/Voice Library Components/PrivateVoices";
import PublicVoices from "../../components/Voice Library Components/PublicVoices";

const VoiceLibrary = () => {
  const publicVoices = [
    "Public Voice 1",
    "Public Voice 1",
    "Public Voice 1",
    "Public Voice 1",
    "Public Voice 1",
    "Public Voice 1",
    "Public Voice 1",
    "Public Voice 1",
    "Public Voice 1",
    "Public Voice 1",
  ];
  const privateVoices = [
    "Private Voice 1",
    "Private Voice 1",
    "Private Voice 1",
    "Private Voice 1",
    "Private Voice 1",
    "Private Voice 1",
    "Private Voice 1",
    "Private Voice 1",
    "Private Voice 1",
    "Private Voice 1",
  ];

  return (
    <>
      <div className="flex items-center gap-2 w-full">
        <RiVoiceprintLine className="w-8 h-8 p-2 rounded-lg dark:bg-[#1D232A] bg-[#FFFFFF]" />
        <p className="text-lg font-semibold">Voice Library</p>
      </div>
      <div className="p-5 flex flex-col gap-y-5">
        <ControlDiv />
        <Accordion
          allowZeroExpanded
          allowMultipleExpanded
          className="flex flex-col gap-2"
        >
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <PrivateVoicesAccordion />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="sm:grid sm:grid-cols-2 sm:gap-x-2 md:grid-cols-3">
                {privateVoices.map((privateVoice, index) => {
                  return (
                    <PrivateVoices privateVoice={privateVoice} key={index} />
                  );
                })}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <PublicVoicesAccordion />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="sm:grid sm:grid-cols-2 sm:gap-x-2 md:grid-cols-3">
                {publicVoices.map((publicVoice, index) => {
                  return <PublicVoices publicVoice={publicVoice} key={index} />;
                })}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default VoiceLibrary;
