import {makeProject} from '@motion-canvas/core';

import example from './scenes/example?scene';
import scene2 from './scenes/scene2?scene';
import scene3 from './scenes/scene3?scene';
import scene4 from './scenes/scene4?scene';
import scene5 from './scenes/scene5?scene';
import scene6 from './scenes/scene6?scene';
import scene7 from './scenes/scene7?scene';

export default makeProject({
  scenes: [example, scene2, scene3, scene4, scene5, scene6, scene7],
});
