'use strict';

window.$ = window.jQuery = require('jquery');
window.Tether = require('tether');
window.Bootstrap = require('bootstrap');

includeHTML();

function updateContent(contentPath) {
  $.when(
    $('#content').html(
      '<div class="col-12" w3-include-html="' + contentPath + '"></div>'
    )
  ).then(includeHTML);
}

// BruteForce Begin

function selectionSortPython() {
  var child = require('child_process').execFile;
  var executablePath = 'python';
  var parameters = [
    'app/bruteForce/python/selectionSort.py',
    '--list',
    $('#list').val()
  ];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace(/\[/g, '')
        .replace(/\]/g, '')
        .replace(/,/g, '')
    );
  });
}

function selectionSortCpp() {
  var child = require('child_process').execFile;
  var executablePath = 'app/bruteForce/c++/selectionSort';
  var parameters = [$('#list').val()];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace(/\[/g, '')
        .replace(/\]/g, '')
        .replace(/,/g, '')
    );
  });
}

function bubbleSortPython() {
  var child = require('child_process').execFile;
  var executablePath = 'python';
  var parameters = [
    'app/bruteForce/python/bubbleSort.py',
    '--list',
    $('#list').val()
  ];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace(/\[/g, '')
        .replace(/\]/g, '')
        .replace(/,/g, '')
    );
  });
}

function bubbleSortCpp() {
  var child = require('child_process').execFile;
  var executablePath = 'app/bruteForce/c++/bubbleSort';
  var parameters = [$('#list').val()];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace(/\[/g, '')
        .replace(/\]/g, '')
        .replace(/,/g, '')
    );
  });
}

function stringMatchingPython() {
  var child = require('child_process').execFile;
  var executablePath = 'python';
  var parameters = [
    'app/bruteForce/python/stringMatching.py',
    '--text',
    $('#text').val(),
    '--pattern',
    $('#pattern').val()
  ];
  child(executablePath, parameters, function(err, data) {
    console.log(data);
    $('#result').html(data.toString());
  });
}

function stringMatchingCpp() {
  var child = require('child_process').execFile;
  var executablePath = 'app/bruteForce/c++/stringMatching';
  var parameters = [$('#text').val(), $('#pattern').val()];
  child(executablePath, parameters, function(err, data) {
    console.log(data);
    $('#result').html(data.toString());
  });
}

function polynomialEvaluationPython() {
  var child = require('child_process').execFile;
  var executablePath = 'python';
  var parameters = [
    'app/bruteForce/python/polynomialEvaluation.py',
    '--list',
    $('#list').val(),
    '--x',
    $('#x').val()
  ];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(data.toString());
  });
}

function polynomialEvaluationCpp() {
  var child = require('child_process').execFile;
  var executablePath = 'app/bruteForce/c++/polynomialEvaluation';
  var parameters = [$('#list').val(), $('#x').val()];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(data.toString());
  });
}

function closestPoints() {
  var child = require('child_process').execFile;
  var executablePath = 'python';
  var parameters = [
    'app/bruteForce/python/closestPoints.py',
    '--points',
    $('#points').val()
  ];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

// BruteForce End

// DivideAndConquer Begin

function recursiveSumPython() {
  var child = require('child_process').execFile;
  var executablePath = 'python';
  var parameters = [
    'app/divideAndConquer/python/recursiveSum.py',
    '--list',
    $('#list').val()
  ];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

function recursiveSumCpp() {
  var child = require('child_process').execFile;
  var executablePath = 'app/divideAndConquer/c++/recursiveSum';
  var parameters = [$('#list').val()];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

function mergeSortPython() {
  var child = require('child_process').execFile;
  var executablePath = 'python';
  var parameters = [
    'app/divideAndConquer/python/mergeSort.py',
    '--list',
    $('#list').val()
  ];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

function mergeSortCpp() {
  var child = require('child_process').execFile;
  var executablePath = 'app/divideAndConquer/c++/mergeSort';
  var parameters = [$('#list').val()];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

function quickSortPython() {
  var child = require('child_process').execFile;
  var executablePath = 'python';
  var parameters = [
    'app/divideAndConquer/python/quickSort.py',
    '--list',
    $('#list').val()
  ];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

function quickSortCpp() {
  var child = require('child_process').execFile;
  var executablePath = 'app/divideAndConquer/c++/quickSort';
  var parameters = [$('#list').val()];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

function binarySearchPython() {
  var child = require('child_process').execFile;
  var executablePath = 'python';
  var parameters = [
    'app/divideAndConquer/python/binarySearch.py',
    '--list',
    $('#list').val(),
    '--x',
    $('#x').val()
  ];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

function binarySearchCpp() {
  var child = require('child_process').execFile;
  var executablePath = 'app/divideAndConquer/c++/binarySearch';
  var parameters = [$('#list').val(), $('#x').val()];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

function multiplicationPython() {
  var child = require('child_process').execFile;
  var executablePath = 'python';
  var parameters = [
    'app/divideAndConquer/python/multiplication.py',
    '--x',
    $('#x').val(),
    '--y',
    $('#y').val()
  ];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

function multiplicationCpp() {
  var child = require('child_process').execFile;
  var executablePath = 'app/divideAndConquer/c++/multiplication';
  var parameters = [$('#x').val(), $('#y').val()];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

// DivideAndConquer End

// DecreaseAndConquer Begin

function insertionSortPython() {
  var child = require('child_process').execFile;
  var executablePath = 'python';
  var parameters = [
    'app/decreaseAndConquer/python/insertionSort.py',
    '--list',
    $('#list').val()
  ];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

function insertionSortCpp() {
  var child = require('child_process').execFile;
  var executablePath = 'app/decreaseAndConquer/c++/insertionSort';
  var parameters = [$('#list').val()];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

// DecreaseAndConquer End

// DynamicProgramming Begin

function binominalCoefficientPython() {
  var child = require('child_process').execFile;
  var executablePath = 'python';
  var parameters = [
    'app/dynamicProgramming/python/binominalCoefficient.py',
    '--n',
    $('#n').val(),
    '--k',
    $('#k').val()
  ];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

function binominalCoefficientCpp() {
  var child = require('child_process').execFile;
  var executablePath = 'app/dynamicProgramming/c++/binominalCoefficient';
  var parameters = [$('#n').val(), $('#k').val()];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

function longestCSPython() {
  var child = require('child_process').execFile;
  var executablePath = 'python';
  var parameters = [
    'app/dynamicProgramming/python/longestCS.py',
    '--sequence1',
    $('#sequence1').val(),
    '--sequence2',
    $('#sequence2').val()
  ];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

function longestCSCpp() {
  var child = require('child_process').execFile;
  var executablePath = 'app/dynamicProgramming/c++/longestCS';
  var parameters = [$('#sequence1').val(), $('#sequence2').val()];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

function shortestCSPython() {
  var child = require('child_process').execFile;
  var executablePath = 'python';
  var parameters = [
    'app/dynamicProgramming/python/shortestCS.py',
    '--sequence1',
    $('#sequence1').val(),
    '--sequence2',
    $('#sequence2').val()
  ];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

function shortestCSCpp() {
  var child = require('child_process').execFile;
  var executablePath = 'app/dynamicProgramming/c++/shortestCS';
  var parameters = [$('#sequence1').val(), $('#sequence2').val()];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

function knapsackProblemPython() {
  var child = require('child_process').execFile;
  var executablePath = 'python';
  var parameters = [
    'app/dynamicProgramming/python/knapsackProblem.py',
    '--values',
    $('#values').val(),
    '--weights',
    $('#weights').val(),
    '--weight',
    $('#weight').val()
  ];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

function knapsackProblemCpp() {
  var child = require('child_process').execFile;
  var executablePath = 'app/dynamicProgramming/c++/knapsackProblem';
  var parameters = [
    $('#values').val(),
    $('#weights').val(),
    $('#weight').val()
  ];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

// DynamicProgramming End

// GreedyAlgorithms Begin

function huffmanCodingCpp() {
  var child = require('child_process').execFile;
  var executablePath = 'app/greedyAlgorithms/c++/huffmanCoding';
  var parameters = [$('#characters').val(), $('#frequencies').val()];
  child(executablePath, parameters, function(err, data) {
    $('#result').html(
      data
        .toString()
        .replace('[', '')
        .replace(']', '')
    );
  });
}

// GreedyAlgorithms End
