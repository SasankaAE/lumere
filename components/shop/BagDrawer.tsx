"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import type { BagItem } from "@/lib/shop-types";

interface BagDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bagItems: BagItem[];
  bagTotal: number;
  onRemoveItem: (id: string) => void;
}

export default function BagDrawer({
  open,
  onOpenChange,
  bagItems,
  bagTotal,
  onRemoveItem,
}: BagDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="bg-[#F5F6F1] border-[#DEDFD3] font-body">
        <SheetHeader>
          <SheetTitle className="font-display text-[#2A3324]">
            Your bag
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex flex-col gap-3">
          {bagItems.length === 0 && (
            <div className="flex flex-col items-center text-center py-12 px-6">
              <div className="w-16 h-16 rounded-full bg-[#E7E9DE] flex items-center justify-center mb-4">
                <ShoppingBag className="w-7 h-7 text-[#8A917E]" />
              </div>
              <p className="text-sm font-medium text-[#2A3324] mb-1">
                Your bag is empty
              </p>
              <p className="text-xs text-[#8A917E] mb-6">
                Add something you'll love and it'll show up here.
              </p>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => onOpenChange(false)}
                className="rounded-full border-[#B7BFA6] text-[#2A3324]"
              >
                Continue shopping
              </Button>
            </div>
          )}
          {bagItems.map((item) => (
            <Card key={item.id} className="border-[#DEDFD3] bg-white/80">
              <CardContent className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium text-[#2A3324]">
                    {item.name}
                  </p>
                  <p className="text-xs text-[#8A917E] font-mono mt-1">
                    Qty {item.qty} · LKR {item.price} each
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm">
                    LKR {item.qty * item.price}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onRemoveItem(item.id)}
                    className="text-[#8A917E] hover:text-[#2A3324]"
                  >
                    Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {bagItems.length > 0 && (
          <SheetFooter className="mt-6 flex-col gap-3 sm:flex-col">
            <div className="flex items-center justify-between w-full">
              <span className="text-sm text-[#6B7A5E]">Total</span>
              <span className="font-mono text-base text-[#2A3324]">
                LKR {bagTotal}
              </span>
            </div>
            <Button className="w-full bg-[#2A3324] hover:bg-[#3B4A3A] text-[#F5F6F1] rounded-full">
              Checkout
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}