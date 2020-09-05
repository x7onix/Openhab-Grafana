import { Component, OnInit } from '@angular/core';

export enum DiagramType {
  Temperature = '2',
  Co2 = '8',
  Humidity = '6',
  Battery = '4'
}

export enum PeriodType {
  TwelveHours = '12h',
  TwentyFourHours = '24h',
  ThreeDays = '3d',
  SevenDays = '7d'
}

@Component({
  selector: 'app-netatmo-diagram',
  templateUrl: './netatmo-diagram.component.html',
  styleUrls: ['./netatmo-diagram.component.css']
})
export class NetatmoDiagramComponent implements OnInit {

  grafanaUrl = 'http://openhab:3000/d-solo/KgY33SRRk/dashboard?from=now-12h&to=now&orgId=1&panelId=2';
  DiagramType = DiagramType;
  PeriodType = PeriodType;
  selectedType = DiagramType.Temperature;
  selectedPeriod = PeriodType.TwelveHours;

  constructor() { }

  ngOnInit(): void {
  }

  onTypeSelect(selectedType: DiagramType): void {
    this.selectedType = selectedType;
    this.updateUrl();
  }

  onPeriodSelect(selectedPeriod: PeriodType): void {
    this.selectedPeriod = selectedPeriod;
    this.updateUrl();
  }

  private updateUrl(): void {
    console.log('Updating Netatmo Diagram URL');
    this.grafanaUrl = `http://openhab:3000/d-solo/KgY33SRRk/dashboard?from=now-${this.selectedPeriod}&to=now&orgId=1&panelId=${this.selectedType}`;
  }
}
