import { Publisher, OrderCancelledEvent, Subjects } from "@jefmertickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
