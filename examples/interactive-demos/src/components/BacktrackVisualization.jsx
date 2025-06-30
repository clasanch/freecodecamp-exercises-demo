import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, SkipForward, SkipBack } from 'lucide-react';

/**
 * Interactive visualization of the No Repeats Please backtracking algorithm
 * Demonstrates step-by-step execution of the permutation counting process
 */
const BacktrackVisualization = () => {
  const [inputString, setInputString] = useState('aab');
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1000);

  /**
   * Generates all algorithm execution steps for visualization
   * Mirrors the actual backtracking algorithm from no-repeats-please.js
   */
  const generateSteps = (str) => {
    const steps = [];
    const chars = str.split('');
    const used = new Array(chars.length).fill(false);
    const permutation = new Array(chars.length);
    let count = 0;

    const backtrack = (level, path = []) => {
      // Add current state before exploring level
      steps.push({
        level,
        chars: [...chars],
        used: [...used],
        permutation: [...permutation],
        count,
        action: `Exploring level ${level}`,
        currentPath: [...path],
        highlight: level < chars.length ? level : -1,
        status: 'exploring'
      });

      // Base case: complete permutation
      if (level === chars.length) {
        count++;
        steps.push({
          level,
          chars: [...chars],
          used: [...used],
          permutation: [...permutation],
          count,
          action: `Valid permutation found! Count = ${count}`,
          currentPath: [...path],
          highlight: -1,
          status: 'found'
        });
        return;
      }

      // Try each character at current position
      for (let i = 0; i < chars.length; i++) {
        if (used[i]) {
          steps.push({
            level,
            chars: [...chars],
            used: [...used],
            permutation: [...permutation],
            count,
            action: `Skip ${chars[i]} (index ${i}) - already used`,
            currentPath: [...path],
            highlight: i,
            status: 'skip-used'
          });
          continue;
        }

        if (level > 0 && chars[i] === permutation[level - 1]) {
          steps.push({
            level,
            chars: [...chars],
            used: [...used],
            permutation: [...permutation],
            count,
            action: `Skip ${chars[i]} (index ${i}) - would create consecutive repeat`,
            currentPath: [...path],
            highlight: i,
            status: 'skip-consecutive'
          });
          continue;
        }

        // Use character
        used[i] = true;
        permutation[level] = chars[i];
        path.push(chars[i]);
        
        steps.push({
          level,
          chars: [...chars],
          used: [...used],
          permutation: [...permutation],
          count,
          action: `Using ${chars[i]} (index ${i}) at position ${level}`,
          currentPath: [...path],
          highlight: i,
          status: 'using'
        });

        // Recursive call
        backtrack(level + 1, path);

        // Backtrack
        used[i] = false;
        permutation[level] = undefined;
        path.pop();
        
        steps.push({
          level,
          chars: [...chars],
          used: [...used],
          permutation: [...permutation],
          count,
          action: `Backtracking: releasing ${chars[i]} (index ${i})`,
          currentPath: [...path],
          highlight: i,
          status: 'backtrack'
        });
      }
    };

    // Initial step
    steps.push({
      level: 0,
      chars: [...chars],
      used: [...used],
      permutation: [...permutation],
      count: 0,
      action: 'Starting backtracking algorithm',
      currentPath: [],
      highlight: -1,
      status: 'start'
    });

    backtrack(0);

    // Final step
    steps.push({
      level: 0,
      chars: [...chars],
      used: new Array(chars.length).fill(false),
      permutation: new Array(chars.length),
      count,
      action: `Algorithm completed. Total valid permutations: ${count}`,
      currentPath: [],
      highlight: -1,
      status: 'complete'
    });

    return steps;
  };

  const [steps, setSteps] = useState(() => generateSteps(inputString));

  // Regenerate steps when input changes
  useEffect(() => {
    setSteps(generateSteps(inputString));
    setCurrentStep(0);
  }, [inputString]);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isPlaying && currentStep < steps.length - 1) {
      interval = setInterval(() => {
        setCurrentStep(prev => prev + 1);
      }, speed);
    } else {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep, steps.length, speed]);

  const currentState = steps[currentStep] || steps[0];

  /**
   * Returns appropriate styling for different algorithm states
   */
  const getStatusColor = (status) => {
    const colorMap = {
      start: 'bg-algorithm-start bg-opacity-20 border-algorithm-start',
      exploring: 'bg-algorithm-explore bg-opacity-20 border-algorithm-explore',
      using: 'bg-algorithm-use bg-opacity-20 border-algorithm-use',
      'skip-used': 'bg-gray-100 border-gray-400',
      'skip-consecutive': 'bg-algorithm-skip bg-opacity-20 border-algorithm-skip',
      backtrack: 'bg-algorithm-backtrack bg-opacity-20 border-algorithm-backtrack',
      found: 'bg-algorithm-found bg-opacity-20 border-algorithm-found',
      complete: 'bg-algorithm-complete bg-opacity-20 border-algorithm-complete'
    };
    return colorMap[status] || 'bg-white border-gray-200';
  };

  const reset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value.slice(0, 4); // Limit to 4 characters for performance
    setInputString(value);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Backtracking Algorithm Visualization
        </h2>
        <p className="text-gray-600 mb-6">
          Watch how the algorithm finds permutations without consecutive repeated characters.
          This visualization shows the exact execution flow of the <code className="bg-gray-100 px-2 py-1 rounded">permAlone</code> function.
        </p>

        {/* Input Controls */}
        <div className="flex flex-wrap gap-6 mb-6">
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Input String (max 4 chars):
            </label>
            <input
              type="text"
              value={inputString}
              onChange={handleInputChange}
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., aab"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Animation Speed:
            </label>
            <select
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value={2000}>Slow (2s)</option>
              <option value={1000}>Normal (1s)</option>
              <option value={500}>Fast (0.5s)</option>
              <option value={200}>Very Fast (0.2s)</option>
            </select>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="btn-primary flex items-center gap-2"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button onClick={reset} className="btn-secondary flex items-center gap-2">
            <RotateCcw size={18} />
            Reset
          </button>
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            className="btn-secondary flex items-center gap-2"
          >
            <SkipBack size={18} />
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            className="btn-secondary flex items-center gap-2"
          >
            <SkipForward size={18} />
            Next
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Step {currentStep + 1} of {steps.length}</span>
            <span>Recursion Level: {currentState.level}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Current State Display */}
      <div className={`p-6 rounded-lg border-2 mb-8 transition-all duration-500 ${getStatusColor(currentState.status)}`}>
        <h3 className="font-bold text-xl mb-3">Current State</h3>
        <p className="text-gray-700 text-lg">{currentState.action}</p>
        <div className="mt-3 text-sm text-gray-600">
          <strong>Valid permutations found so far:</strong> {currentState.count}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Data Structures Visualization */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Data Structures</h3>
          
          {/* chars array */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-gray-700">chars (original characters):</h4>
            <div className="flex gap-2 flex-wrap">
              {currentState.chars.map((char, i) => (
                <div key={`char-${i}`} className="relative">
                  <div
                    className={`array-cell ${
                      currentState.highlight === i
                        ? 'border-blue-500 bg-blue-100 array-cell-highlight'
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    {char}
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-1">{i}</div>
                </div>
              ))}
            </div>
          </div>

          {/* used array */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-gray-700">used (character usage flags):</h4>
            <div className="flex gap-2 flex-wrap">
              {currentState.used.map((isUsed, i) => (
                <div key={`used-${i}`} className="relative">
                  <div
                    className={`array-cell text-xs font-bold ${
                      isUsed
                        ? 'border-red-500 bg-red-100 text-red-700'
                        : 'border-green-500 bg-green-100 text-green-700'
                    } ${currentState.highlight === i ? 'array-cell-highlight' : ''}`}
                  >
                    {isUsed ? 'TRUE' : 'FALSE'}
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-1">{i}</div>
                </div>
              ))}
            </div>
          </div>

          {/* permutation array */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-gray-700">permutation (current arrangement):</h4>
            <div className="flex gap-2 flex-wrap">
              {currentState.permutation.map((char, i) => (
                <div key={`perm-${i}`} className="relative">
                  <div
                    className={`array-cell ${
                      i < currentState.level
                        ? 'border-purple-500 bg-purple-100'
                        : i === currentState.level && char !== undefined
                        ? 'border-yellow-500 bg-yellow-100'
                        : 'border-gray-300 bg-gray-50'
                    }`}
                  >
                    {char || '·'}
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-1">{i}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Path and Legend */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Current Path</h3>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-2xl font-mono mb-2">
              {currentState.currentPath.length > 0 
                ? currentState.currentPath.join(' → ')
                : 'Empty path'
              }
            </div>
            <div className="text-sm text-gray-600">
              Length: {currentState.currentPath.length} / {currentState.chars.length}
            </div>
          </div>

          {/* Status Legend */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-4 text-gray-700">Status Legend:</h4>
            <div className="space-y-2 text-sm">
              {[
                { status: 'start', label: 'Algorithm Start', color: 'bg-algorithm-start bg-opacity-20 border-algorithm-start' },
                { status: 'exploring', label: 'Exploring Level', color: 'bg-algorithm-explore bg-opacity-20 border-algorithm-explore' },
                { status: 'using', label: 'Using Character', color: 'bg-algorithm-use bg-opacity-20 border-algorithm-use' },
                { status: 'skip-consecutive', label: 'Skip (Consecutive Repeat)', color: 'bg-algorithm-skip bg-opacity-20 border-algorithm-skip' },
                { status: 'skip-used', label: 'Skip (Already Used)', color: 'bg-gray-100 border-gray-400' },
                { status: 'backtrack', label: 'Backtracking', color: 'bg-algorithm-backtrack bg-opacity-20 border-algorithm-backtrack' },
                { status: 'found', label: 'Valid Permutation Found', color: 'bg-algorithm-found bg-opacity-20 border-algorithm-found' },
                { status: 'complete', label: 'Algorithm Complete', color: 'bg-algorithm-complete bg-opacity-20 border-algorithm-complete' }
              ].map(({ status, label, color }) => (
                <div key={status} className="flex items-center gap-3">
                  <div className={`w-4 h-4 border-2 rounded ${color}`}></div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final Result */}
      {currentState.status === 'complete' && (
        <div className="mt-8 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
          <h3 className="font-bold text-green-800 text-xl mb-3">Algorithm Result</h3>
          <p className="text-green-700 text-lg">
            For the string "<strong>{inputString}</strong>", the algorithm found{' '}
            <strong className="text-2xl">{currentState.count}</strong> valid permutations 
            without consecutive repeated characters.
          </p>
          <div className="mt-3 text-sm text-green-600">
            This matches the result from the actual <code>permAlone("{inputString}")</code> function!
          </div>
        </div>
      )}
    </div>
  );
};

export default BacktrackVisualization;