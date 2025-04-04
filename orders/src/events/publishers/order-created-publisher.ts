import { Publisher, OrderCreatedEvent, Subjects } from "@jefmertickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}