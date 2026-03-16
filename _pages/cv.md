---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Professional summary
======
Systems engineer specializing in industrial automation, IIoT architecture, telemetry pipelines,
and software-enabled digital transformation for manufacturing environments. I build practical
bridges between industrial equipment, edge software services, and analytics platforms.

Current positioning
======
* Industrial Systems Engineer
* IIoT and telemetry platform builder
* Robotics-adjacent infrastructure learner
* Founder direction: Salbotics Solutions

Core expertise
======
* Industrial automation and PLC integration
* Industrial protocols including Modbus TCP and MQTT
* Python systems development and telemetry services
* Edge-to-cloud architecture for machine data
* PostgreSQL and TimescaleDB for time-series workloads
* Grafana dashboarding and telemetry analytics
* Docker-based deployment and service packaging
* Documentation-first engineering and reproducible project delivery

Featured project
======
* **IIoT Telemetry Stack** - End-to-end industrial telemetry pipeline with machine simulation,
  Modbus polling, MQTT transport, Python ingestion, time-series storage, and Grafana dashboards.
  See the full project page at [{{ '/portfolio/iiot-pipeline/' | relative_url }}]({{ '/portfolio/iiot-pipeline/' | relative_url }}).

Selected project archive
======
<ul>{% for post in site.portfolio reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

Professional direction
======
* Industrial AI and smart manufacturing platforms
* Scalable factory telemetry architectures
* ROS2 and robotics infrastructure
* Autonomous industrial monitoring systems

Contact
======
* Email: [{{ site.author.email }}](mailto:{{ site.author.email }})
* GitHub: [{{ site.author.github }}]({{ site.author.github }})
* LinkedIn: [{{ site.author.linkedin }}]({{ site.author.linkedin }})
