import gym
import numpy as np
    
class Preprocessing(ObservationWrapper):

  def to_grayscale(img):
    return np.mean(img, axis=2).astype(np.uint8)

  def downsample(img):
    return img[::2, ::2]

  def preprocess(img):
    return to_grayscale(downsample(img))


# Create a new environment
env = preprocess(gym.make('BreakoutDeterministic-v4'))
# Reset it, returns the starting frame
frame = env.reset()
env.render()

is_done = False
while not is_done:
  # Perform a random action, returns the new frame, reward and whether the game is over
  observation, reward, is_done, _ = env.step(env.action_space.sample())
  #print(reward)
  env.render()
