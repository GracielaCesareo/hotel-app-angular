import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  constructor() { 
    let saveReservations = localStorage.getItem("reservations");
    this.reservations = saveReservations? JSON.parse(saveReservations) : [];
  }
  
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
    reservation.id = Date.now().toString()
    this.reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }

  /**
   * Delete reservation by id
   * @param id
   */
  public deleteReservation(id:string): void {
    let index = this.reservations.findIndex(reservation => reservation.id === id)
    this.reservations.splice(index, 1)
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }

  /**
   * Edit reservation
   * @param updatedReservation
   */
  public updateReservation(id: string, updatedReservation: Reservation) {
    let index = this.reservations.findIndex(reservation => reservation.id === id)
    this.reservations[index] = updatedReservation
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }
}
