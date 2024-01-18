import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';

interface Node {
  id: string;
  x?: number;
  y?: number;
}

interface Link {
  source: string;
  target: string;
}


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.createForceDirectedGraph();
  }

  createForceDirectedGraph() {
    const svg = d3.select(this.elementRef.nativeElement).select('svg');
    const width = +svg.attr('width');
    const height = +svg.attr('height');

    // Create a D3 force simulation
    const simulation = d3
      .forceSimulation<Node>()
      .force('charge', d3.forceManyBody<Node>())
      .force('center', d3.forceCenter(width / 2, height / 2));

    // Create a D3 force link
    const linkForce = d3
      .forceLink<Node, Link>()
      .id(d => d.id);

    // Add the link force to the simulation
    simulation.force('links', linkForce);

    // Load your graph data (nodes and links)
    // Replace this with your data loading logic
    const graphData = {
      nodes: [
        { id: 'Node 1', x: 100, y: 100 },
        { id: 'Node 2', x: 200, y: 200 },
        // Add more nodes here
      ],
      links: [
        { source: 'Node 1', target: 'Node 2' },
        // Add more links here
      ],
    };

    // Create the graph links and nodes
    const link = svg
      .selectAll<SVGLineElement, Link>('.link')
      .data(graphData.links)
      .enter()
      .append('line')
      .attr('class', 'link');

    const node = svg
      .selectAll<SVGCircleElement, Node>('.node')
      .data(graphData.nodes)
      .enter()
      .append('circle')
      .attr('class', 'node');

    // Update positions during simulation
    simulation.nodes(graphData.nodes).on('tick', () => {
      link
        .attr('x1', d => (d.source as any).x)
        .attr('y1', d => (d.source as any).y)
        .attr('x2', d => (d.target as any).x)
        .attr('y2', d => (d.target as any).y);

      node
        .attr('cx', d => (d as any).x)
        .attr('cy', d => (d as any).y);
    });
  }

}
