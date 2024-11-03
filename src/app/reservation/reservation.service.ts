import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  constructor() { }
  
  /**
   * Get all reservations 
   * @returns Reservation[]
   */
  public getReservationsList():Reservation[] {
    return this.reservations;
  }

  /**
   * Get specific reservation by id
   * @param id string
   * @returns 
   */
  public getReservationById(id:string): Reservation | undefined{
    return this.reservations.find(reservation => reservation.id === id)
  }

  /**
   * Create new reservation
   * @param reservation 
   */
  public addReservation(reservation:Reservation): void {
    this.reservations.push(reservation);
  }

  /**
   * Delete reservation by id
   * @param id
   */
  public deleteReservation(id:string): void {
    let index = this.reservations.findIndex(reservation => reservation.id === id)
    this.reservations.splice(index, 1)
  }

  /**
   * Edit reservation
   * @param updatedReservation
   */
  public updateReservation(updatedReservation: Reservation) {
    let index = this.reservations.findIndex(reservation => reservation.id === updatedReservation.id)
    this.reservations[index] = updatedReservation
  }
}
