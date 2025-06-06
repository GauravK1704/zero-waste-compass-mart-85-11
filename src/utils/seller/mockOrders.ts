
import { OrderStatus, PaymentStatus } from "@/types";

export interface MockOrder {
  id: string;
  customerName: string;
  items: string[];
  total: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  date: string;
}

export const generateMockOrders = (): MockOrder[] => {
  return [
    {
      id: "ORD-001",
      customerName: "John Doe",
      items: ["Organic Apples", "Fresh Bread"],
      total: 25.50,
      status: "pending",
      paymentStatus: "completed",
      date: new Date().toISOString().split('T')[0]
    },
    {
      id: "ORD-002", 
      customerName: "Jane Smith",
      items: ["Eco-friendly Soap"],
      total: 12.99,
      status: "processing",
      paymentStatus: "pending",
      date: new Date().toISOString().split('T')[0]
    }
  ];
};
