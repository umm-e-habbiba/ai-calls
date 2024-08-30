import React, { useState, useEffect } from "react";
import QuickStart from "../../../components/SVGs/QuickStart";
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
        <div class="flex flex-row h-full p-3 gap-x-4 bg-foreground/5">
          <svg
            width="20.2832"
            height="19.9316"
            viewBox="0 0 20.2832 19.9316"
            fill="'none' || '#000000"
            stroke="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-8 h-8 fill-icon/40 group-hover:rotate-90 transition-all duration-150 ease-in-out"
          >
            <g>
              <rect
                height="19.9316"
                opacity="0"
                width="20.2832"
                x="0"
                y="0"
              ></rect>
              <path
                d="M19.9219 9.96094C19.9219 15.4004 15.4102 19.9219 9.96094 19.9219C4.52148 19.9219 0 15.4004 0 9.96094C0 4.51172 4.51172 0 9.95117 0C15.4004 0 19.9219 4.51172 19.9219 9.96094ZM9.11133 6.05469L9.11133 9.11133L6.05469 9.11133C5.54688 9.11133 5.19531 9.46289 5.19531 9.9707C5.19531 10.4688 5.54688 10.8008 6.05469 10.8008L9.11133 10.8008L9.11133 13.8672C9.11133 14.3652 9.45312 14.7266 9.95117 14.7266C10.459 14.7266 10.8105 14.375 10.8105 13.8672L10.8105 10.8008L13.877 10.8008C14.375 10.8008 14.7363 10.4688 14.7363 9.9707C14.7363 9.46289 14.375 9.11133 13.877 9.11133L10.8105 9.11133L10.8105 6.05469C10.8105 5.54688 10.459 5.18555 9.95117 5.18555C9.45312 5.18555 9.11133 5.54688 9.11133 6.05469Z"
                fill-opacity="0.85"
              ></path>
            </g>
          </svg>
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
            <svg
              width="22.2559"
              height="19.7559"
              viewBox="0 0 22.2559 19.7559"
              fill="'none' || '#000000"
              stroke="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-7 h-7 mb-2 fill-icon/40"
            >
              <g>
                <rect
                  height="19.7559"
                  opacity="0"
                  width="22.2559"
                  x="0"
                  y="0"
                ></rect>
                <path
                  d="M11.3379 16.2793L21.1426 16.2793C21.5527 16.2793 21.8945 15.957 21.8945 15.5469C21.8945 15.127 21.5527 14.8047 21.1426 14.8047L11.3379 14.8047C10.9277 14.8047 10.5957 15.127 10.5957 15.5469C10.5957 15.957 10.9277 16.2793 11.3379 16.2793Z"
                  fill-opacity="0.85"
                ></path>
                <path
                  d="M4.20898 19.7559C6.50391 19.7559 8.41797 17.8418 8.41797 15.5469C8.41797 13.2324 6.50391 11.3281 4.20898 11.3281C1.9043 11.3281 0 13.2422 0 15.5469C0 17.8418 1.91406 19.7559 4.20898 19.7559ZM4.20898 18.3301C2.69531 18.3301 1.42578 17.0508 1.42578 15.5469C1.42578 14.0332 2.70508 12.7539 4.20898 12.7539C5.71289 12.7539 6.99219 14.0332 6.99219 15.5469C6.99219 17.0508 5.71289 18.3301 4.20898 18.3301Z"
                  fill-opacity="0.85"
                ></path>
                <path
                  d="M11.3379 4.99023L21.1426 4.99023C21.5527 4.99023 21.8945 4.66797 21.8945 4.24805C21.8945 3.83789 21.5527 3.51562 21.1426 3.51562L11.3379 3.51562C10.9277 3.51562 10.5957 3.83789 10.5957 4.24805C10.5957 4.66797 10.9277 4.99023 11.3379 4.99023Z"
                  fill-opacity="0.85"
                ></path>
                <path
                  d="M4.20898 8.44727C6.50391 8.44727 8.41797 6.54297 8.41797 4.24805C8.41797 1.94336 6.50391 0.0292969 4.20898 0.0292969C1.9043 0.0292969 0 1.94336 0 4.24805C0 6.54297 1.91406 8.44727 4.20898 8.44727ZM3.71094 6.50391C3.50586 6.50391 3.36914 6.39648 3.22266 6.23047L2.12891 4.91211C2.03125 4.80469 2.00195 4.6875 2.00195 4.53125C2.00195 4.24805 2.2168 4.02344 2.48047 4.02344C2.66602 4.02344 2.80273 4.10156 2.92969 4.26758L3.69141 5.23438L5.42969 2.44141C5.54688 2.26562 5.69336 2.16797 5.86914 2.16797C6.14258 2.16797 6.37695 2.38281 6.37695 2.62695C6.37695 2.76367 6.33789 2.88086 6.25 3.02734L4.20898 6.23047C4.10156 6.40625 3.92578 6.50391 3.71094 6.50391Z"
                  fill-opacity="0.85"
                ></path>
              </g>
            </svg>
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
            <svg
              width="23.7598"
              height="23.1409"
              viewBox="0 0 23.7598 23.1409"
              fill="'none' || '#000000"
              stroke="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-7 h-7 mb-2 fill-icon/40"
            >
              <g>
                <rect
                  height="23.1409"
                  opacity="0"
                  width="23.7598"
                  x="0"
                  y="0"
                ></rect>
                <path
                  d="M20.7031 13.5578C21.0645 13.8019 21.5137 13.714 21.7773 13.3429C23.0273 11.6242 23.7598 9.26089 23.7598 6.84878C23.7598 4.43667 23.0371 2.05386 21.7773 0.35464C21.5137-0.0262192 21.0645-0.104344 20.7031 0.139796C20.3418 0.383937 20.2832 0.842921 20.5664 1.24331C21.6406 2.74722 22.2461 4.7687 22.2461 6.84878C22.2461 8.92886 21.6211 10.9308 20.5664 12.4542C20.293 12.8546 20.3418 13.3136 20.7031 13.5578Z"
                  fill-opacity="0.85"
                ></path>
                <path
                  d="M17.0898 11.0089C17.4121 11.2335 17.8711 11.1652 18.1348 10.7843C18.8867 9.798 19.3359 8.34292 19.3359 6.84878C19.3359 5.35464 18.8867 3.90933 18.1348 2.90347C17.8711 2.53237 17.4121 2.45425 17.0898 2.68862C16.6895 2.96206 16.6309 3.45034 16.9336 3.85073C17.5 4.63198 17.8223 5.71597 17.8223 6.84878C17.8223 7.98159 17.4902 9.05581 16.9336 9.84683C16.6406 10.257 16.6895 10.7257 17.0898 11.0089Z"
                  fill-opacity="0.85"
                ></path>
                <path
                  d="M3.7207 20.3449L15.9863 20.3449C17.5195 20.3449 18.0664 19.9054 18.0664 19.046C18.0664 16.5265 14.9121 13.05 9.85352 13.05C4.78516 13.05 1.63086 16.5265 1.63086 19.046C1.63086 19.9054 2.17773 20.3449 3.7207 20.3449ZM9.85352 11.3019C11.9531 11.3019 13.7598 9.42691 13.7598 6.9855C13.7598 4.57339 11.9434 2.78628 9.85352 2.78628C7.76367 2.78628 5.94727 4.61245 5.94727 7.00503C5.94727 9.42691 7.76367 11.3019 9.85352 11.3019Z"
                  fill-opacity="0.85"
                ></path>
              </g>
            </svg>
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
            <svg
              width="21.8848"
              height="21.5723"
              viewBox="0 0 21.8848 21.5723"
              fill="'none' || '#000000"
              stroke="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-7 h-7 mb-2 fill-icon/40"
            >
              <g>
                <rect
                  height="21.5723"
                  opacity="0"
                  width="21.8848"
                  x="0"
                  y="0"
                ></rect>
                <path
                  d="M21.5234 5.78125L21.5234 13.2617C21.5234 16.123 19.9609 17.7246 17.0508 17.7246L10.4492 17.7246L6.92383 20.9473C6.46484 21.377 6.18164 21.5723 5.80078 21.5723C5.24414 21.5723 4.93164 21.1719 4.93164 20.5664L4.93164 17.7246L4.47266 17.7246C1.5625 17.7246 0 16.1328 0 13.2617L0 5.78125C0 2.91016 1.5625 1.30859 4.47266 1.30859L17.0508 1.30859C19.9609 1.30859 21.5234 2.91992 21.5234 5.78125ZM9.45312 13.5547C9.45312 14.1406 9.96094 14.5996 10.5371 14.5996C11.123 14.5996 11.6309 14.1504 11.6309 13.5547C11.6309 12.9688 11.1328 12.5098 10.5371 12.5098C9.95117 12.5098 9.45312 12.9785 9.45312 13.5547ZM7.72461 6.10352C7.67578 6.25977 7.63672 6.42578 7.63672 6.60156C7.63672 7.05078 7.99805 7.29492 8.33984 7.29492C8.68164 7.29492 8.89648 7.12891 9.08203 6.89453L9.25781 6.65039C9.61914 6.06445 10.1465 5.73242 10.8105 5.73242C11.7285 5.73242 12.3242 6.25 12.3242 7.01172C12.3242 7.69531 11.9043 8.02734 11.0156 8.64258C10.3027 9.15039 9.75586 9.67773 9.75586 10.6738C9.75586 10.7129 9.75586 10.7617 9.75586 10.8008C9.75586 11.3281 10.0391 11.6016 10.5664 11.6016C11.0742 11.6016 11.377 11.2793 11.377 10.8789C11.377 10.8398 11.377 10.791 11.377 10.7617C11.377 10.1953 11.709 9.83398 12.4121 9.375C13.3887 8.73047 14.0918 8.14453 14.0918 6.93359C14.0918 5.25391 12.5977 4.36523 10.8789 4.36523C9.14062 4.36523 8.00781 5.17578 7.72461 6.10352Z"
                  fill-opacity="0.85"
                ></path>
              </g>
            </svg>
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
            <svg
              width="28.5547"
              height="17.7051"
              viewBox="0 0 28.5547 17.7051"
              fill="'none' || '#000000"
              stroke="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-7 h-7 mb-2 fill-icon/40"
            >
              <g>
                <rect
                  height="17.7051"
                  opacity="0"
                  width="28.5547"
                  x="0"
                  y="0"
                ></rect>
                <path
                  d="M5.94727 6.89453C5.94727 6.38672 6.25977 6.07422 6.78711 6.07422L8.59375 6.07422L8.59375 4.31641C8.59375 3.79883 8.88672 3.48633 9.39453 3.48633C9.89258 3.48633 10.1953 3.79883 10.1953 4.31641L10.1953 6.07422L11.8848 6.07422C12.4512 6.07422 12.793 6.38672 12.793 6.89453C12.793 7.42188 12.4512 7.74414 11.8848 7.74414L10.1953 7.74414L10.1953 9.50195C10.1953 10.0195 9.89258 10.3418 9.39453 10.3418C8.88672 10.3418 8.59375 10.0195 8.59375 9.50195L8.59375 7.74414L6.78711 7.74414C6.25977 7.74414 5.94727 7.42188 5.94727 6.89453ZM20.3613 6.79688C19.5605 6.79688 18.8867 6.14258 18.8867 5.33203C18.8867 4.51172 19.5605 3.85742 20.3613 3.85742C21.1816 3.85742 21.8359 4.51172 21.8359 5.33203C21.8359 6.14258 21.1816 6.79688 20.3613 6.79688ZM17.4023 9.77539C16.6016 9.77539 15.9277 9.12109 15.9277 8.31055C15.9277 7.5 16.6016 6.83594 17.4023 6.83594C18.2129 6.83594 18.877 7.5 18.877 8.31055C18.877 9.12109 18.2129 9.77539 17.4023 9.77539ZM3.7207 17.7051C5.05859 17.7051 5.97656 17.2168 6.79688 16.2012L8.56445 14.0625C8.81836 13.7598 9.11133 13.6133 9.4043 13.6133L18.7891 13.6133C19.082 13.6133 19.375 13.7598 19.6289 14.0625L21.3965 16.2012C22.2168 17.2168 23.1348 17.7051 24.4727 17.7051C26.709 17.7051 28.1934 16.2207 28.1934 13.9355C28.1934 12.959 27.9688 11.8359 27.5879 10.5762C26.9922 8.57422 25.9473 5.84961 24.9512 3.74023C24.1113 1.98242 23.6816 1.18164 21.6113 0.712891C19.7754 0.292969 17.2266 0.00976562 14.1016 0.00976562C10.9766 0.00976562 8.41797 0.292969 6.58203 0.712891C4.51172 1.18164 4.08203 1.98242 3.24219 3.74023C2.24609 5.84961 1.20117 8.57422 0.605469 10.5762C0.224609 11.8359 0 12.959 0 13.9355C0 16.2207 1.48438 17.7051 3.7207 17.7051Z"
                  fill-opacity="0.85"
                ></path>
              </g>
            </svg>
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
