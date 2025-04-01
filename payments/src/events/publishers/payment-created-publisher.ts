import { PaymentCreatedEvent, Publisher, Subjects } from "@jefmertickets/common";


export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}