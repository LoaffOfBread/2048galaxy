// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  console.log('2x2 Application starting...');
  console.log('Available constructors:', {
    GameManager: typeof GameManager,
    KeyboardInputManager: typeof KeyboardInputManager,
    HTMLActuator: typeof HTMLActuator,
    LocalStorageManager2x2: typeof LocalStorageManager2x2
  });
  
  try {
    // Initialize 3x3 game with specific storage manager
    var game = new GameManager(2, KeyboardInputManager, HTMLActuator, LocalStorageManager2x2);
    console.log('GameManager created successfully!', game);
    console.log('Grid size:', game.size);
    console.log('Initial grid state:', game.grid);
  } catch (error) {
    console.error('Error creating GameManager:', error);
    alert('Error: ' + error.message);
  }
});
