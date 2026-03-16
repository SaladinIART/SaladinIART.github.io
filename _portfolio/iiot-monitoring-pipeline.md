---
title: "IIoT Monitoring Pipeline (PLC to MQTT to Grafana)"
collection: portfolio
permalink: /portfolio/iiot-pipeline/
excerpt: "Industrial telemetry pipeline using Python, Docker, MQTT, TimescaleDB, and Grafana."
date: 2026-03-05
slug: iiot-monitoring-pipeline
featured: true
tech_stack:
  - Modbus TCP
  - MQTT
  - Python
  - Docker
  - PostgreSQL
  - TimescaleDB
  - Grafana
---

## Problem statement

Modern factories often have machine signals available at the control layer, but not in a format that
is easy to monitor, analyze, or scale across software systems. This project demonstrates how to turn
that raw machine data into a structured telemetry platform that can support engineering visibility,
operational insight, and future digital transformation work.

## Architecture flow

The stack is designed as a clear edge-to-dashboard pipeline:

1. A machine simulator exposes operational signals over Modbus TCP.
2. A Python collector polls the machine state and normalizes telemetry payloads.
3. MQTT acts as the message transport layer between field collection and downstream services.
4. A Python ingestion service validates and writes telemetry into a time-series data platform.
5. Grafana dashboards visualize machine behavior, state transitions, and trends.

## Protocols and services

### Industrial interface

- Modbus TCP for simulated machine telemetry
- Machine state modeling for run, idle, and fault conditions

### Software services

- Python services for polling, data transformation, and ingestion
- MQTT broker for lightweight, decoupled message transport
- JSON telemetry contracts for structured downstream handling

### Data and observability

- PostgreSQL and TimescaleDB for time-series persistence
- Grafana for dashboards, trend views, and operational monitoring

## Reliability and scalability features

- Clear separation between collection, transport, ingestion, and visualization layers
- Retry-aware ingestion logic to improve resilience during transient failures
- Containerized deployment with Docker for reproducible local environments
- Migration-ready schema patterns and test-friendly service boundaries
- Open-source components chosen for extensibility and realistic industrial learning value

## Tooling stack

- Python with `pymodbus` and `paho-mqtt`
- Docker and Docker Compose
- Mosquitto MQTT
- PostgreSQL and TimescaleDB
- Grafana

## Engineering and business value

This project is a portfolio-grade example of how industrial teams can bridge OT and IT without
jumping directly to complex enterprise platforms. It shows a practical path from machine connectivity
to dashboards, data capture, and architecture patterns that can later support reporting, alerts,
analytics, or higher-level smart manufacturing initiatives.
