import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../styles/globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { HeaderMenu } from '@/components/appui/headerMenu';
// import { Icons } from '@/components/icons';
import ModeToggle from '@/components/appui/modeToggle';
import { AppSidebar } from '@/components/app-sidebar';
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'အခြေခံအဘိဓမ္မာသင်တန်း - စီမံခန့်ခွဲခြင်း',
  description: 'အရှင်ကုသလာလင်္ကာရ ဦးစီးသင်ကြားသည်။',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {/* <div className="sticky top-0 w-full bg-background border-b-2 z-50">
            <div className="flex flex-col sm:flex-row justify-between items-center py-2 px-4 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <Icons.logo className="h-6 w-6" />
                <h1 className="hidden sm:block text-xl font-semibold">Site Title</h1>
              </div>
              <HeaderMenu />
              <ModeToggle />
            </div>
          </div> */}
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  {/* <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb> */}
                  <HeaderMenu />
                  <ModeToggle />
                </div>
              </header>
              {children}
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
