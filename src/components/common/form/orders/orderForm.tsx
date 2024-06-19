import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const OrderSchema = z.object({
  nOrden: z.string(),
  product: z.string(),
  amount: z.number(),
  price: z.number(),
  purchaseTime: z.date(),
  seller: z.string(),
});

type Order = z.infer<typeof OrderSchema>;

export function OrderForm() {
  const form = useForm<Order>({
    resolver: zodResolver(OrderSchema),
    defaultValues: {
      nOrden: '',
      product: '',
      amount: 0,
      price: 0.0,
      purchaseTime: new Date(),
      seller: '',
    }
  });
  
  async function onSubmit(values: z.infer<typeof OrderSchema>) {
    try{
      const fValues = {
        ...values,
        purchaseTime: values.purchaseTime.toISOString().split('T')[0],
        nOrden: "0000010"
      }
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:uRLR9xAm/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fValues),
    });

    if (!response.ok) {
      throw new Error('Error al enviar la solicitud');
    }
    } catch (error) {
        console.error('Error:', error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="product"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter product name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter amount" {...field} onChange={(event) => field.onChange(event.target.valueAsNumber)}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter price" {...field} onChange={(event) => field.onChange(event.target.valueAsNumber)}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="purchaseTime"
          render={({ field }) => (
            <FormItem className='flex flex-col w-full'>
              <FormLabel>Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className="w-full pl-3 text-left font-normal rounded-xl"
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(date: Date | undefined) => {
                      if (date) {
                        form.setValue('purchaseTime', date);
                      }
                    }}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="seller"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seller</FormLabel>
              <FormControl>
                <Input placeholder="Enter seller name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end space-x-2">
          <Button type="button">Cancel</Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Form>
  );
}

export default OrderForm;