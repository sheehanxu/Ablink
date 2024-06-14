/*************** 
 * Ab0422 *
 ***************/


// store info about the experiment session:
let expName = 'AB0422';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const blockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blockLoopBegin(blockLoopScheduler));
flowScheduler.add(blockLoopScheduler);
flowScheduler.add(blockLoopEnd);















flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'LuckList.csv', 'path': 'LuckList.csv'},
    {'name': 'distractors.csv', 'path': 'distractors.csv'},
    {'name': 'distractors.csv', 'path': 'distractors.csv'},
    {'name': 'distractors.csv', 'path': 'distractors.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructionsClock;
var text_instructions;
var key_resp;
var T0_contextClock;
var context_word;
var blankContext;
var distractorsClock;
var text_disctractors;
var T1_numberClock;
var text_T1;
var T2_probeClock;
var text_T2;
var Ask_T1Clock;
var blankT1_1;
var text_T1ask;
var blankT1_2;
var key_resp_T1;
var Ask_T2Clock;
var blankT2_1;
var text_T2ask;
var blankT2_2;
var key_resp_T2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  text_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions',
    text: 'Instructions\n\nIf you see an odd number, please press the F key on your keyboard.\nIf you see an even number, please press the J key on your keyboard.\nPlease focus your attention and try to respond as accurately and swiftly as possible. Once you are ready, we will begin the test.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "T0_context"
  T0_contextClock = new util.Clock();
  context_word = new visual.TextStim({
    win: psychoJS.window,
    name: 'context_word',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), 1.0]),  opacity: undefined,
    depth: 0.0 
  });
  
  blankContext = new visual.TextStim({
    win: psychoJS.window,
    name: 'blankContext',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "distractors"
  distractorsClock = new util.Clock();
  text_disctractors = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_disctractors',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "T1_number"
  T1_numberClock = new util.Clock();
  text_T1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_T1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "T2_probe"
  T2_probeClock = new util.Clock();
  text_T2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_T2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Ask_T1"
  Ask_T1Clock = new util.Clock();
  blankT1_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blankT1_1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_T1ask = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_T1ask',
    text: '?\n\nOdd-F    Even-J',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), 1.0]),  opacity: undefined,
    depth: -1.0 
  });
  
  blankT1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blankT1_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_T1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Ask_T2"
  Ask_T2Clock = new util.Clock();
  blankT2_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blankT2_1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_T2ask = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_T2ask',
    text: '?\n\nRelated-F    Unrelated-J',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), 1.0]),  opacity: undefined,
    depth: -1.0 
  });
  
  blankT2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blankT2_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_T2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(text_instructions);
    instructionsComponents.push(key_resp);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instructions* updates
    if (t >= 0.0 && text_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions.tStart = t;  // (not accounting for frame time here)
      text_instructions.frameNStart = frameN;  // exact frame index
      
      text_instructions.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var block;
function blockLoopBegin(blockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'LuckList.csv',
      seed: undefined, name: 'block'
    });
    psychoJS.experiment.addLoop(block); // add the loop to the experiment
    currentLoop = block;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    block.forEach(function() {
      snapshot = block.getSnapshot();
    
      blockLoopScheduler.add(importConditions(snapshot));
      blockLoopScheduler.add(T0_contextRoutineBegin(snapshot));
      blockLoopScheduler.add(T0_contextRoutineEachFrame());
      blockLoopScheduler.add(T0_contextRoutineEnd(snapshot));
      const trials_contextLoopScheduler = new Scheduler(psychoJS);
      blockLoopScheduler.add(trials_contextLoopBegin(trials_contextLoopScheduler, snapshot));
      blockLoopScheduler.add(trials_contextLoopScheduler);
      blockLoopScheduler.add(trials_contextLoopEnd);
      blockLoopScheduler.add(T1_numberRoutineBegin(snapshot));
      blockLoopScheduler.add(T1_numberRoutineEachFrame());
      blockLoopScheduler.add(T1_numberRoutineEnd(snapshot));
      const trials_T1LoopScheduler = new Scheduler(psychoJS);
      blockLoopScheduler.add(trials_T1LoopBegin(trials_T1LoopScheduler, snapshot));
      blockLoopScheduler.add(trials_T1LoopScheduler);
      blockLoopScheduler.add(trials_T1LoopEnd);
      blockLoopScheduler.add(T2_probeRoutineBegin(snapshot));
      blockLoopScheduler.add(T2_probeRoutineEachFrame());
      blockLoopScheduler.add(T2_probeRoutineEnd(snapshot));
      const trials_T2LoopScheduler = new Scheduler(psychoJS);
      blockLoopScheduler.add(trials_T2LoopBegin(trials_T2LoopScheduler, snapshot));
      blockLoopScheduler.add(trials_T2LoopScheduler);
      blockLoopScheduler.add(trials_T2LoopEnd);
      blockLoopScheduler.add(Ask_T1RoutineBegin(snapshot));
      blockLoopScheduler.add(Ask_T1RoutineEachFrame());
      blockLoopScheduler.add(Ask_T1RoutineEnd(snapshot));
      blockLoopScheduler.add(Ask_T2RoutineBegin(snapshot));
      blockLoopScheduler.add(Ask_T2RoutineEachFrame());
      blockLoopScheduler.add(Ask_T2RoutineEnd(snapshot));
      blockLoopScheduler.add(blockLoopEndIteration(blockLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_context;
function trials_contextLoopBegin(trials_contextLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_context = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'distractors.csv', '0:5'),
      seed: undefined, name: 'trials_context'
    });
    psychoJS.experiment.addLoop(trials_context); // add the loop to the experiment
    currentLoop = trials_context;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_context.forEach(function() {
      snapshot = trials_context.getSnapshot();
    
      trials_contextLoopScheduler.add(importConditions(snapshot));
      trials_contextLoopScheduler.add(distractorsRoutineBegin(snapshot));
      trials_contextLoopScheduler.add(distractorsRoutineEachFrame());
      trials_contextLoopScheduler.add(distractorsRoutineEnd(snapshot));
      trials_contextLoopScheduler.add(trials_contextLoopEndIteration(trials_contextLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_contextLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_context);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_contextLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_T1;
function trials_T1LoopBegin(trials_T1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_T1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'distractors.csv', '0:5'),
      seed: undefined, name: 'trials_T1'
    });
    psychoJS.experiment.addLoop(trials_T1); // add the loop to the experiment
    currentLoop = trials_T1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_T1.forEach(function() {
      snapshot = trials_T1.getSnapshot();
    
      trials_T1LoopScheduler.add(importConditions(snapshot));
      trials_T1LoopScheduler.add(distractorsRoutineBegin(snapshot));
      trials_T1LoopScheduler.add(distractorsRoutineEachFrame());
      trials_T1LoopScheduler.add(distractorsRoutineEnd(snapshot));
      trials_T1LoopScheduler.add(trials_T1LoopEndIteration(trials_T1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_T1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_T1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_T1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_T2;
function trials_T2LoopBegin(trials_T2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_T2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'distractors.csv', '0:5'),
      seed: undefined, name: 'trials_T2'
    });
    psychoJS.experiment.addLoop(trials_T2); // add the loop to the experiment
    currentLoop = trials_T2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_T2.forEach(function() {
      snapshot = trials_T2.getSnapshot();
    
      trials_T2LoopScheduler.add(importConditions(snapshot));
      trials_T2LoopScheduler.add(distractorsRoutineBegin(snapshot));
      trials_T2LoopScheduler.add(distractorsRoutineEachFrame());
      trials_T2LoopScheduler.add(distractorsRoutineEnd(snapshot));
      trials_T2LoopScheduler.add(trials_T2LoopEndIteration(trials_T2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_T2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_T2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_T2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blockLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(block);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blockLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var T0_contextComponents;
function T0_contextRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'T0_context' ---
    t = 0;
    T0_contextClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('T0_context.started', globalClock.getTime());
    context_word.setText(T0);
    // keep track of which components have finished
    T0_contextComponents = [];
    T0_contextComponents.push(context_word);
    T0_contextComponents.push(blankContext);
    
    T0_contextComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function T0_contextRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'T0_context' ---
    // get current time
    t = T0_contextClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *context_word* updates
    if (t >= 0.0 && context_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      context_word.tStart = t;  // (not accounting for frame time here)
      context_word.frameNStart = frameN;  // exact frame index
      
      context_word.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (context_word.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      context_word.setAutoDraw(false);
    }
    
    
    // *blankContext* updates
    if (t >= 1 && blankContext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blankContext.tStart = t;  // (not accounting for frame time here)
      blankContext.frameNStart = frameN;  // exact frame index
      
      blankContext.setAutoDraw(true);
    }
    
    frameRemains = 1 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blankContext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blankContext.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    T0_contextComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function T0_contextRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'T0_context' ---
    T0_contextComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('T0_context.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var distractorsComponents;
function distractorsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'distractors' ---
    t = 0;
    distractorsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.083000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('distractors.started', globalClock.getTime());
    text_disctractors.setText(dist);
    // keep track of which components have finished
    distractorsComponents = [];
    distractorsComponents.push(text_disctractors);
    
    distractorsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function distractorsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'distractors' ---
    // get current time
    t = distractorsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_disctractors* updates
    if (t >= 0 && text_disctractors.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_disctractors.tStart = t;  // (not accounting for frame time here)
      text_disctractors.frameNStart = frameN;  // exact frame index
      
      text_disctractors.setAutoDraw(true);
    }
    
    frameRemains = 0 + 0.083 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_disctractors.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_disctractors.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    distractorsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function distractorsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'distractors' ---
    distractorsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('distractors.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var T1_numberComponents;
function T1_numberRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'T1_number' ---
    t = 0;
    T1_numberClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.083000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('T1_number.started', globalClock.getTime());
    text_T1.setText(T1);
    // keep track of which components have finished
    T1_numberComponents = [];
    T1_numberComponents.push(text_T1);
    
    T1_numberComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function T1_numberRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'T1_number' ---
    // get current time
    t = T1_numberClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_T1* updates
    if (t >= 0 && text_T1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_T1.tStart = t;  // (not accounting for frame time here)
      text_T1.frameNStart = frameN;  // exact frame index
      
      text_T1.setAutoDraw(true);
    }
    
    frameRemains = 0 + 0.083 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_T1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_T1.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    T1_numberComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function T1_numberRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'T1_number' ---
    T1_numberComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('T1_number.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var T2_probeComponents;
function T2_probeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'T2_probe' ---
    t = 0;
    T2_probeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.083000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('T2_probe.started', globalClock.getTime());
    text_T2.setText(T2);
    // keep track of which components have finished
    T2_probeComponents = [];
    T2_probeComponents.push(text_T2);
    
    T2_probeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function T2_probeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'T2_probe' ---
    // get current time
    t = T2_probeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_T2* updates
    if (t >= 0 && text_T2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_T2.tStart = t;  // (not accounting for frame time here)
      text_T2.frameNStart = frameN;  // exact frame index
      
      text_T2.setAutoDraw(true);
    }
    
    frameRemains = 0 + 0.083 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_T2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_T2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    T2_probeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function T2_probeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'T2_probe' ---
    T2_probeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('T2_probe.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_T1_allKeys;
var Ask_T1Components;
function Ask_T1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Ask_T1' ---
    t = 0;
    Ask_T1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Ask_T1.started', globalClock.getTime());
    key_resp_T1.keys = undefined;
    key_resp_T1.rt = undefined;
    _key_resp_T1_allKeys = [];
    // keep track of which components have finished
    Ask_T1Components = [];
    Ask_T1Components.push(blankT1_1);
    Ask_T1Components.push(text_T1ask);
    Ask_T1Components.push(blankT1_2);
    Ask_T1Components.push(key_resp_T1);
    
    Ask_T1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Ask_T1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Ask_T1' ---
    // get current time
    t = Ask_T1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blankT1_1* updates
    if (t >= 0.0 && blankT1_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blankT1_1.tStart = t;  // (not accounting for frame time here)
      blankT1_1.frameNStart = frameN;  // exact frame index
      
      blankT1_1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blankT1_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blankT1_1.setAutoDraw(false);
    }
    
    
    // *text_T1ask* updates
    if (t >= 1 && text_T1ask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_T1ask.tStart = t;  // (not accounting for frame time here)
      text_T1ask.frameNStart = frameN;  // exact frame index
      
      text_T1ask.setAutoDraw(true);
    }
    
    frameRemains = 1 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_T1ask.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_T1ask.setAutoDraw(false);
    }
    
    
    // *blankT1_2* updates
    if (t >= 3 && blankT1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blankT1_2.tStart = t;  // (not accounting for frame time here)
      blankT1_2.frameNStart = frameN;  // exact frame index
      
      blankT1_2.setAutoDraw(true);
    }
    
    frameRemains = 3 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blankT1_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blankT1_2.setAutoDraw(false);
    }
    
    
    // *key_resp_T1* updates
    if (t >= 1 && key_resp_T1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_T1.tStart = t;  // (not accounting for frame time here)
      key_resp_T1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_T1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_T1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_T1.clearEvents(); });
    }
    
    frameRemains = 1 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_T1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_T1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_T1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_T1.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _key_resp_T1_allKeys = _key_resp_T1_allKeys.concat(theseKeys);
      if (_key_resp_T1_allKeys.length > 0) {
        key_resp_T1.keys = _key_resp_T1_allKeys[_key_resp_T1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_T1.rt = _key_resp_T1_allKeys[_key_resp_T1_allKeys.length - 1].rt;
        key_resp_T1.duration = _key_resp_T1_allKeys[_key_resp_T1_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_T1.keys == responseT1) {
            key_resp_T1.corr = 1;
        } else {
            key_resp_T1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Ask_T1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Ask_T1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Ask_T1' ---
    Ask_T1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Ask_T1.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_T1.keys === undefined) {
      if (['None','none',undefined].includes(responseT1)) {
         key_resp_T1.corr = 1;  // correct non-response
      } else {
         key_resp_T1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_T1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_T1.keys', key_resp_T1.keys);
    psychoJS.experiment.addData('key_resp_T1.corr', key_resp_T1.corr);
    if (typeof key_resp_T1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_T1.rt', key_resp_T1.rt);
        psychoJS.experiment.addData('key_resp_T1.duration', key_resp_T1.duration);
        routineTimer.reset();
        }
    
    key_resp_T1.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_T2_allKeys;
var Ask_T2Components;
function Ask_T2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Ask_T2' ---
    t = 0;
    Ask_T2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Ask_T2.started', globalClock.getTime());
    key_resp_T2.keys = undefined;
    key_resp_T2.rt = undefined;
    _key_resp_T2_allKeys = [];
    // keep track of which components have finished
    Ask_T2Components = [];
    Ask_T2Components.push(blankT2_1);
    Ask_T2Components.push(text_T2ask);
    Ask_T2Components.push(blankT2_2);
    Ask_T2Components.push(key_resp_T2);
    
    Ask_T2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Ask_T2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Ask_T2' ---
    // get current time
    t = Ask_T2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blankT2_1* updates
    if (t >= 0.0 && blankT2_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blankT2_1.tStart = t;  // (not accounting for frame time here)
      blankT2_1.frameNStart = frameN;  // exact frame index
      
      blankT2_1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blankT2_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blankT2_1.setAutoDraw(false);
    }
    
    
    // *text_T2ask* updates
    if (t >= 1 && text_T2ask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_T2ask.tStart = t;  // (not accounting for frame time here)
      text_T2ask.frameNStart = frameN;  // exact frame index
      
      text_T2ask.setAutoDraw(true);
    }
    
    frameRemains = 1 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_T2ask.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_T2ask.setAutoDraw(false);
    }
    
    
    // *blankT2_2* updates
    if (t >= 3 && blankT2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blankT2_2.tStart = t;  // (not accounting for frame time here)
      blankT2_2.frameNStart = frameN;  // exact frame index
      
      blankT2_2.setAutoDraw(true);
    }
    
    frameRemains = 3 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blankT2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blankT2_2.setAutoDraw(false);
    }
    
    
    // *key_resp_T2* updates
    if (t >= 1 && key_resp_T2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_T2.tStart = t;  // (not accounting for frame time here)
      key_resp_T2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_T2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_T2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_T2.clearEvents(); });
    }
    
    frameRemains = 1 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_T2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_T2.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_T2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_T2.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _key_resp_T2_allKeys = _key_resp_T2_allKeys.concat(theseKeys);
      if (_key_resp_T2_allKeys.length > 0) {
        key_resp_T2.keys = _key_resp_T2_allKeys[_key_resp_T2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_T2.rt = _key_resp_T2_allKeys[_key_resp_T2_allKeys.length - 1].rt;
        key_resp_T2.duration = _key_resp_T2_allKeys[_key_resp_T2_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_T2.keys == responseT2) {
            key_resp_T2.corr = 1;
        } else {
            key_resp_T2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Ask_T2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Ask_T2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Ask_T2' ---
    Ask_T2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Ask_T2.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_T2.keys === undefined) {
      if (['None','none',undefined].includes(responseT2)) {
         key_resp_T2.corr = 1;  // correct non-response
      } else {
         key_resp_T2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_T2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_T2.keys', key_resp_T2.keys);
    psychoJS.experiment.addData('key_resp_T2.corr', key_resp_T2.corr);
    if (typeof key_resp_T2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_T2.rt', key_resp_T2.rt);
        psychoJS.experiment.addData('key_resp_T2.duration', key_resp_T2.duration);
        routineTimer.reset();
        }
    
    key_resp_T2.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
