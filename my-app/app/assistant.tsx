"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/thread";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const Assistant = () => {
  const runtime = useChatRuntime({
    api: "/api/chat",
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="bg-gray-50 min-h-screen">
          {/* Top Header */}
          <header className="flex flex-col items-center justify-center py-6 border-b gap-2">
            {/* Custom Headings */}
            <h1 className="text-4xl font-bold text-green-700">
              Ethical Tax UI
            </h1>
            <h2 className="text-xl font-medium text-gray-600">
              Ethical Tax Bot
            </h2>

            {/* Optional Breadcrumb */}
            <div className="mt-4 w-full px-4">
              <div className="flex items-center gap-2">
                <SidebarTrigger />
                <Separator orientation="vertical" className="h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">
                        Ethical Tax UI
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Ethical Tax Bot</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          </header>

          {/* Chat Thread Area */}
          <main className="p-4">
            <Thread />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </AssistantRuntimeProvider>
  );
};

