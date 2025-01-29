import { AppSidebar } from "@/components/app-sidebar"
import { Iframe } from "@/components/iframe"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Kitchen
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Your Projects</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50"> 
            <img src="https://media.istockphoto.com/id/1456242777/de/foto/moderne-japandi-mock-up-zimmer-innenarchitektur-und-dekoration-mit-gr%C3%BCner-pastelltheke-und.jpg?s=612x612&w=0&k=20&c=nHsENGuZM7H_7s6T6gn815k0mrIJ6mCL39JZGBZ7Lfw=" alt="" 
            className="rounded-xl w-full h-full object-cover"/>
            </div> 
            <div className="aspect-video rounded-xl bg-muted/50">
            <img src="https://www.brownstoner.com/wp-content/uploads/2017/08/reform-ikea-danish-kitchen-design-brooklyn-basis.jpg" alt="" 
            className="rounded-xl w-full h-full object-cover"
            /></div> 
            <div className="aspect-video rounded-xl bg-muted/50">
            <img src="https://www.fitzgeraldkitchens.com/wp-content/uploads/2015/08/kitchen_design_principles.jpg" alt=""  
            className="rounded-xl w-full h-full object-cover"/>
             </div> 
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min"> 
              <h6 className="absolute bottom-10 left-10 text-black text-s font-regular opacity-50">
                 Made with Rust and WASM
              </h6>
              <iframe
                src="https://write.yiransheng.com/rust-snake-wasm/"
                className="w-full h-full rounded-xl border-none"
                allow="fullscreen"
              />
          </div> 
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
