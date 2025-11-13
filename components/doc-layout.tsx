"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Search, Menu, X, ChevronDown, ChevronRight, ExternalLink, Lock, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { ZtakeAIChatbot } from "@/components/ztake-ai-chatbot"
import { useTheme } from "@/components/theme-provider"

const navigation = [
  { name: "API Introduction", href: "/api-introduction" },
  { name: "Authorization", href: "/authorization" },
  { name: "Postman Collection", href: "/postman-collection" },
  { name: "Adding funds to Virtual Account", href: "/adding-funds-to-virtual-account" },
  { name: "Key things to handle", href: "/key-things-to-handle" },
  { name: "Guide on Ztake AI", href: "/docs-ai-guide" },
  {
    name: "Ztake Payouts",
    items: [
      { name: "Overview", href: "/ztake-payouts" },
      { name: "Initiate Payout", href: "/ztake-payouts/initiate-payout" },
      { name: "Fetch Balance", href: "/ztake-payouts/fetch-balance" },
      { name: "Fetch Transaction Status", href: "/ztake-payouts/fetch-transaction-status" },
      { name: "Get Statement", href: "/ztake-payouts/get-statement" },
      { name: "Connected Account Statement", href: "/ztake-payouts/connected-account-statement" },
    ],
  },
  {
    name: "Sub Virtual Accounts",
    items: [
      { name: "Overview", href: "/sub-virtual-accounts" },
      { name: "Create Sub VA", href: "/sub-virtual-accounts/create-sub-va" },
      { name: "Fetch Sub VA", href: "/sub-virtual-accounts/fetch-sub-va" },
      { name: "Deactivate Sub VA", href: "/sub-virtual-accounts/deactivate-sub-va" },
      { name: "Activate Sub VA", href: "/sub-virtual-accounts/activate-sub-va" },
      { name: "Payout from Sub VA", href: "/sub-virtual-accounts/payout-from-sub-va" },
      { name: "Update Sub VA", href: "/sub-virtual-accounts/update-sub-va" },
      { name: "List Sub-VAs", href: "/sub-virtual-accounts/list-sub-vas" },
    ],
  },
  {
    name: "Webhooks",
    items: [
      { name: "Overview", href: "/webhooks" },
      { name: "Debit Webhook", href: "/webhooks/debit-webhook" },
      { name: "Credit Webhook", href: "/webhooks/credit-webhook" },
      { name: "Verification Webhook", href: "/webhooks/verification-webhook" },
      { name: "PG Collection Callback", href: "/webhooks/pg-collection-callback" },
    ],
  },
  {
    name: "PG Collection (Scale UPI)",
    items: [
      { name: "Overview", href: "/pg-collection-scale-upi" },
      { name: "Create Static VPA", href: "/pg-collection-scale-upi/create-static-vpa" },
      { name: "Create Dynamic VPA", href: "/pg-collection-scale-upi/create-dynamic-vpa" },
      { name: "UPI Collect", href: "/pg-collection-scale-upi/upi-collect" },
      { name: "Create PG Link", href: "/pg-collection-scale-upi/create-pg-link" },
      { name: "Query List Transactions", href: "/pg-collection-scale-upi/query-list-transactions" },
      { name: "Refund Payment", href: "/pg-collection-scale-upi/refund-payment" },
      { name: "Create UPI Sub Merchant", href: "/pg-collection-scale-upi/create-upi-sub-merchant" },
      { name: "Generate QR Live Demo", href: "/pg-collection-scale-upi/generate-qr-live-demo" },
    ],
  },
  {
    name: "Verification Stack",
    items: [
      { name: "Overview", href: "/verification-stack" },
      { name: "Bank Verification (Pennydrop)", href: "/verification-stack/bank-verification-pennydrop" },
      { name: "Bank Verification (Sync)", href: "/verification-stack/bank-verification-sync" },
      { name: "Penniless Account Verification", href: "/verification-stack/penniless-account-verification" },
      { name: "Reverse Penny Drop", href: "/verification-stack/reverse-penny-drop" },
      { name: "PAN Premium", href: "/verification-stack/pan-premium" },
      { name: "PAN Lite", href: "/verification-stack/pan-lite" },
      { name: "Aadhaar Digilocker OKYC", href: "/verification-stack/aadhaar-digilocker-okyc" },
      { name: "Verify IFSC", href: "/verification-stack/verify-ifsc" },
      { name: "CRIF Credit Report", href: "/verification-stack/crif-credit-report" },
      { name: "Experian Credit Report", href: "/verification-stack/experian-credit-report" },
      { name: "Prefill Alternate Bureau", href: "/verification-stack/prefill-alternate-bureau" },
      { name: "Verify GST", href: "/verification-stack/verify-gst" },
      { name: "Verify GST using PAN", href: "/verification-stack/verify-gst-using-pan" },
      { name: "Get Director Phone", href: "/verification-stack/get-director-phone" },
      { name: "Get PAN using Phone", href: "/verification-stack/get-pan-using-phone" },
      { name: "Verify Voter ID", href: "/verification-stack/verify-voter-id" },
      { name: "Verify Indian Passport", href: "/verification-stack/verify-indian-passport" },
    ],
  },
  {
    name: "BBPS (Bill Payments)",
    items: [
      { name: "Overview", href: "/bbps" },
      { name: "List Categories", href: "/bbps/list-categories" },
      { name: "Select Biller", href: "/bbps/select-biller" },
      { name: "Fetch Bill", href: "/bbps/fetch-bill" },
      { name: "Make Bill Payment", href: "/bbps/make-bill-payment" },
      { name: "Fetch Payment Status", href: "/bbps/fetch-payment-status" },
      { name: "List BBPS Transactions", href: "/bbps/list-bbps-transactions" },
    ],
  },
  {
    name: "Other",
    items: [
      { name: "Upsell Cards and Loans", href: "/other/upsell-cards-and-loans" },
      { name: "Customer Support", href: "/other/customer-support" },
      { name: "IP Getting Blacklisted", href: "/other/ip-getting-blacklisted" },
      { name: "Whitelist Your IP", href: "/other/whitelist-your-ip" },
      { name: "eNACH", href: "/other/enach" },
      { name: "Payouts Contact Management", href: "/other/payouts-contact-management" },
    ],
  },
]

interface DocLayoutProps {
  children: React.ReactNode
  title?: string
  lastEdit?: string
  onThisPage?: Array<{ title: string; id: string }>
}

export function DocLayout({ children, title, lastEdit, onThisPage }: DocLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const currentSection = navigation.find((item) => {
      if (item.items) {
        return item.items.some((subItem) => pathname === subItem.href)
      }
      return false
    })
    if (currentSection && !expandedSections.includes(currentSection.name)) {
      setExpandedSections((prev) => [...prev, currentSection.name])
    }
  }, [pathname])

  const toggleSection = (name: string) => {
    setExpandedSections((prev) => (prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]))
  }

  return (
    <div className={`min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-gray-950`}>
      <header className={`sticky top-0 z-50 w-full glass dark:glass border-b border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow duration-500`}>
        <div className="flex h-16 items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden dark:text-white hover:bg-gray-100 dark:hover:bg-white/20 rounded-xl transition-all duration-500 active:scale-95" 
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-70 transition-opacity duration-500 active:scale-95">
              <Image src="/assets/ztake-logo.png" alt="Ztake" width={32} height={32} />
              <span className="text-black dark:text-white">Ztake API Doc </span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            
            <Link href="https://identity.getpostman.com/login" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 bg-orange-600 text-white hover:bg-orange-700 hover:text-white border-orange-600 rounded-xl transition-all duration-500 hover:shadow-lg active:scale-95"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Run in Postman</span>
              </Button>
            </Link>
            <Link href="https://ztake.in" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 ml-2 font-sans font-black transition-colors duration-500 active:scale-95">
              ZTAKE
            </Link>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-72 transform glass dark:glass border-r border-gray-200 dark:border-white/10 transition-all duration-500 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:translate-x-0 overflow-hidden ${
            sidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col bg-white/60 dark:bg-gray-900/40 backdrop-blur-3xl">
            <div className="p-4 border-b border-gray-200 dark:border-white/10">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                <Input 
                  type="search" 
                  placeholder="Search" 
                  className="pl-9 glass-sm dark:glass-sm bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 dark:text-white dark:placeholder-gray-500 rounded-xl transition-all duration-500 focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-950 hover:bg-gray-100 dark:hover:bg-white/8" 
                />
              </div>
            </div>
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    {item.items ? (
                      <div>
                        {item.name === "Verification Stack" || item.name === "Sub Virtual Accounts" ? (
                          <Link
                            href={
                              item.name === "Verification Stack"
                                ? "/verification-stack-access"
                                : "/sub-virtual-accounts-access"
                            }
                            className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:glass-hover dark:hover:glass-hover transition-all duration-500 group"
                            onClick={() => setSidebarOpen(false)}
                          >
                            <span className="flex items-center gap-2">
                              {item.name}
                              <Lock className="h-3.5 w-3.5 text-gray-500 dark:text-gray-400 group-hover:scale-110 transition-transform duration-500" />
                            </span>
                            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-500" />
                          </Link>
                        ) : (
                          <button
                            onClick={() => toggleSection(item.name)}
                            className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-white/40 dark:hover:bg-white/10 transition-all duration-500 group"
                          >
                            <span>{item.name}</span>
                            {expandedSections.includes(item.name) ? (
                              <ChevronDown className="h-4 w-4 group-hover:scale-110 transition-transform duration-500" />
                            ) : (
                              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-500" />
                            )}
                          </button>
                        )}
                        {expandedSections.includes(item.name) &&
                          item.name !== "Verification Stack" &&
                          item.name !== "Sub Virtual Accounts" && (
                            <ul className="ml-3 mt-2 space-y-1 border-l border-gray-200 dark:border-white/10 pl-3">
                              {item.items.map((subItem) => (
                                <li key={subItem.href}>
                                  <Link
                                    href={subItem.href}
                                    className={`block rounded-lg px-3 py-2 text-sm transition-all duration-500 group ${
                                      pathname === subItem.href
                                        ? "nav-item-active"
                                        : "nav-item"
                                    }`}
                                    onClick={() => setSidebarOpen(false)}
                                  >
                                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-500">{subItem.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block rounded-xl px-3 py-3 text-sm font-semibold transition-all duration-500 group ${
                          pathname === item.href ? "nav-item-active" : "nav-item"
                        }`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="group-hover:translate-x-1 inline-block transition-transform duration-500">{item.name}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 lg:flex">
          <div className="flex-1 px-4 py-8 lg:px-12 max-w-4xl">
            {title && (
              <div className="mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-500">
                  <span>Documentation</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
                {lastEdit && <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-500">Last edit {lastEdit}</div>}
              </div>
            )}
            {children}
          </div>

          {onThisPage && onThisPage.length > 0 && (
            <aside className="hidden xl:block w-64 glass dark:glass border-l border-gray-200 dark:border-white/10 p-6">
              <div className="sticky top-24">
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-4">On this page</h4>
                <ul className="space-y-2">
                  {onThisPage.map((item) => (
                    <li key={item.id}>
                      <a 
                        href={`#${item.id}`} 
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white block rounded-lg px-3 py-2 transition-all duration-500 hover:bg-white/60 dark:hover:bg-white/10 group"
                      >
                        <span className="group-hover:translate-x-1 inline-block transition-transform duration-500">{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-gray-900/50 dark:bg-black/70 lg:hidden backdrop-blur-md transition-all duration-500 active:backdrop-blur-lg" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Ztake AI chatbot */}
      <ZtakeAIChatbot />
    </div>
  )
}

export default DocLayout
