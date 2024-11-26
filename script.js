// Data untuk timeline
var items = new vis.DataSet([
  { id: 1, content: 'Event 1', start: '2023-01-01' },
  { id: 2, content: 'Event 2', start: '2023-03-01' },
  { id: 3, content: 'Event 3', start: '2023-05-01' },
  { id: 4, content: 'Event 4', start: '2023-07-01' }
]);

// Konfigurasi dan render timeline
var container = document.getElementById('timeline');
var options = {};
var timeline = new vis.Timeline(container, items, options);
