const url = 'https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json'

// Demographic Info
function panelInfo(id) {
    d3.json(url).then(function (data) {
        let sampleData = data;
        let metadata = sampleData.metadata;
        let identifier = metadata.filter(sample =>
            sample.id.toString() === id)[0];
        let panel = d3.select('#sample-metadata');
        panel.html('');
        Object.entries(identifier).forEach(([key, value]) => {
            panel.append('h6').text(`${key}: ${value}`);
        })
    })
};

//Bar Charts and Bubble chart Plots
function Plots(id) {
    d3.json(url).then(function (data) {
        let sampleData = data;
        let samples = sampleData.samples;
        let identifier = samples.filter(sample => sample.id === id);
        let filtered = identifier[0];
        let OTUvalues = filtered.sample_values.slice(0, 10).reverse();
        let OTUids = filtered.otu_ids.slice(0, 10).reverse();
        let labels = filtered.otu_labels.slice(0, 10).reverse();
        let barTrace = {
            x: OTUvalues,
            y: OTUids.map(object => 'OTU ' + object),
            name: labels,
            type: 'bar',
            orientation: 'h'
        };
        let barLayout = {
            title: `Top 10 OTUs for Subject ${id}`,
            xaxis: { title: 'Sample Values' },
            yaxis: { title: 'OTU ID' }
        };
        let barData = [barTrace];
        Plotly.newPlot('bar', barData, barLayout);
        let bubbleTrace = {
            x: filtered.otu_ids,
            y: filtered.sample_values,
            mode: 'markers',
            marker: {
                size: filtered.sample_values,
                color: filtered.otu_ids,
                colorscale: 'Portland'
            },
            text: filtered.otu_labels,
        };
        let bubbleData = [bubbleTrace];
        let bubbleLayout = {
            title: `OTUs for Subject ${id}`,
            xaxis: { title: 'OTU ID', tickvals: [0, 500, 1000, 1500, 2000, 2500,3000] },
            yaxis: { title: 'Sample Values' }
        };
        Plotly.newPlot('bubble', bubbleData, bubbleLayout);
    })
};

//Build new upon ID change
function optionChanged(id) {
    Plots(id);
    panelInfo(id);
};

//Test Subject Dropdown and initial function
function init() {
    let dropDown = d3.select('#selDataset');
    let id = dropDown.property('value');
    d3.json(url).then(function (data) {
        sampleData = data;
        let names = sampleData.names;
        let samples = sampleData.samples;
        Object.values(names).forEach(value => {
            dropDown.append('option').text(value);
        })
        panelInfo(names[0]);
        Plots(names[0])
    })
};

init();
