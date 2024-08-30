import React, { useState, useEffect } from "react";
import QuickStart from "../../../components/SVGs/QuickStart";
import PlusIcon from "@heroicons/react/24/outline/PlusCircleIcon";
import QueueListIcon from "@heroicons/react/24/outline/QueueListIcon";
import ChatBubbleLeftRightIcon from "@heroicons/react/24/outline/ChatBubbleLeftRightIcon";
import PuzzlePieceIcon from "@heroicons/react/24/outline/PuzzlePieceIcon";
import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
function CreateAssistant() {
  const [assistantName, setAssistantName] = useState("");
  const [template, setTemplate] = useState("blank");
  return (
    <div className="my-3">
      <h6 className="font-bold">Choose a template</h6>
      <p>
        Here's a few templates to get you started, or you can create your own
        template and use it to create a new assistant.
      </p>
      <div class="mb-4">
        <label
          for="assistant_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Assistant Name{" "}
          <span className="text-yellow-600">
            (This can be adjusted at any time after creation.)
          </span>
        </label>
        <input
          type="text"
          id="assistant_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="New Assistant"
          required
          value={assistantName}
          onChange={(e) => setAssistantName(e.target.value)}
        />
      </div>
      <div class="group w-full hover:bg-background cursor-pointer rounded-xl border-border overflow-hidden transition-all duration-150 ease-in-out active:scale-[0.99] flex flex-col bg-hover border ring-4 ring-primary/80 mb-8">
        <div class="flex flex-row h-full p-3 gap-x-4 bg-foreground/5 justify-start items-center">
          <PlusIcon className="h-8 w-8" />
          <div class="flex flex-col gap-y-1">
            <p class="font-medium text-md text-text">Blank Template</p>
            <p class="text-xs text-text/60">
              This blank slate template with minimal configurations. It's a
              starting point for creating your custom assistant.
            </p>
          </div>
        </div>
      </div>

      <div class="relative p-4 grid grid-cols-2 bg-background/30 border-[2px] border-gray-600 rounded-2xl gap-4 mt-2">
        <div class="absolute top-[-16px] left-[15px]">
          <QuickStart />
        </div>
        <div class="w-full bg-foreground hover:bg-background cursor-pointer rounded-xl border border-border overflow-hidden transition-all duration-150 ease-in-out active:scale-[0.98] flex flex-col">
          <div class="flex flex-col h-full p-3 gap-x-4 bg-foreground/5">
            <QueueListIcon className="h-8 w-8" />
            <div class="flex flex-col gap-y-1">
              <p class="font-medium text-md text-text"> Appointment Setter</p>
              <p class="text-xs text-muted-foreground">
                Designed for dental practices to demonstrate setting
                appointments. It streamlines scheduling, answers common
                questions, and provides service information.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full bg-foreground hover:bg-background cursor-pointer rounded-xl border border-border overflow-hidden transition-all duration-150 ease-in-out active:scale-[0.98] flex flex-col">
          <div class="flex flex-col h-full p-3 gap-x-4 bg-foreground/5">
            <UserGroupIcon className="h-8 w-8" />
            <div class="flex flex-col gap-y-1">
              <p class="font-medium text-md text-text"> Customer Support</p>
              <p class="text-xs text-muted-foreground">
                A versatile template designed with a perfect mix of emotional
                intelligence and technical knowledge. Ideal for empathetic,
                efficient customer support.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full bg-foreground hover:bg-background cursor-pointer rounded-xl border border-border overflow-hidden transition-all duration-150 ease-in-out active:scale-[0.98] flex flex-col">
          <div class="flex flex-col h-full p-3 gap-x-4 bg-foreground/5">
            <ChatBubbleLeftRightIcon className="h-8 w-8" />
            <div class="flex flex-col gap-y-1">
              <p class="font-medium text-md text-text"> Inbound Q/A</p>
              <p class="text-xs text-muted-foreground">
                An inbound call agent example designed to provide comprehensive
                support for SmartHome Innovations. With a deep understanding of
                product details and troubleshooting.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full bg-foreground hover:bg-background cursor-pointer rounded-xl border border-border overflow-hidden transition-all duration-150 ease-in-out active:scale-[0.98] flex flex-col">
          <div class="flex flex-col h-full p-3 gap-x-4 bg-foreground/5">
            <PuzzlePieceIcon className="h-8 w-8" />
            <div class="flex flex-col gap-y-1">
              <p class="font-medium text-md text-text"> Game NPC</p>
              <p class="text-xs text-muted-foreground">
                An assistant for demonstrating an in-game NPC, Elenya is
                designed to offer guidance, lore, and insights into the
                mysteries of the natural world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAssistant;
