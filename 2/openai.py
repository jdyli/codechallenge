import gym
import universe  # register the universe environments

env = gym.make('flashgames.NeonRace-v0')
env.configure(remotes=1)  # automatically creates a local docker container
observation_n = env.reset() # instantiate proper simulation environment

turn = 0
goLeft = [('KeyEvent', 'ArrowLeft', True), ('KeyEvent', 'ArrowUp', True), ('KeyEvent', 'ArrowRight', False)]
goRight = [('KeyEvent', 'ArrowLeft', False), ('KeyEvent', 'ArrowUp', True), ('KeyEvent', 'ArrowRight', True)]
go = [('KeyEvent', 'ArrowUp', True)]
action = go

while True:
  turn -= -1
  if turn <= 0:
    action = go
    turn = 0

  action_n = [action for ob in observation_n]  # your agent here
  observation_n, reward_n, done_n, info = env.step(action_n)
  env.render()
