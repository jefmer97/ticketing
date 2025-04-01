import { ExpirationCompleteEvent, Publisher, Subjects } from "@jefmertickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}