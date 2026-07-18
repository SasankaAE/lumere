"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ORDER_TABS, ORDERS } from "@/lib/orders-data";
import type { OrderTabKey } from "@/lib/shop-types";

interface OrdersSectionProps {
  orderTab: OrderTabKey;
  onOrderTabChange: (tab: OrderTabKey) => void;
}

export default function OrdersSection({
  orderTab,
  onOrderTabChange,
}: OrdersSectionProps) {
  return (
    <section className="mb-14">
      <h2 className="font-display text-xl font-medium mb-4 text-[#2A3324]">
        My orders
      </h2>
      <Tabs
        value={orderTab}
        onValueChange={(value) => onOrderTabChange(value as OrderTabKey)}
      >
        <TabsList className="bg-[#E7E9DE] p-1 rounded-full h-auto flex-wrap justify-start gap-1">
          {ORDER_TABS.map(({ key, label, icon: Icon }) => (
            <TabsTrigger
              key={key}
              value={key}
              className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-[#2A3324] data-[state=active]:text-[#F5F6F1] flex items-center gap-2"
            >
              <Icon className="w-4 h-4" />
              {label}
              <Badge variant="secondary" className="ml-1 bg-[#D8DFC9] text-[#2A3324]">
                {ORDERS[key]?.length ?? 0}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>

        {ORDER_TABS.map(({ key }) => (
          <TabsContent key={key} value={key} className="mt-4">
            <div className="grid gap-3">
              {ORDERS[key].length === 0 && (
                <p className="text-sm text-[#6B7A5E] py-6">
                  Nothing here right now.
                </p>
              )}
              {ORDERS[key].map((order) => (
                <Card key={order.id} className="border-[#DEDFD3] bg-white/70">
                  <CardContent className="flex items-center justify-between py-4">
                    <div>
                      <p className="font-medium text-sm text-[#2A3324]">
                        {order.item}
                      </p>
                      <p className="text-xs text-[#8A917E] font-mono mt-1">
                        {order.id} · Qty {order.qty}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm">
                        LKR {order.price}
                      </span>
                      <Button
                        size="sm"
                        className="bg-[#2A3324] hover:bg-[#3B4A3A] text-[#F5F6F1] rounded-full"
                      >
                        {order.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}