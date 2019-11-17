# Open AI

In April 2018 OpenAI has launched Gym where algorithms can be developed and compared with Reinforcement Learning. After a few months a new toolkit has been released that is build on top of Gym: Universe. According to OpenAI, Universe works by automatically launching the program behind a VNC remote desktop — it doesn’t need special access to program internals, source code, or bot APIs.

In this project a bot-game will be developed by using Universe, where the bot learns to play Atari.

## Learning goals
- How to make a single AI-agent?
- How AI works in game technology, specifically reinforcement learning? How to implement Q-learning?
- What is Docker and how does it work?
- What is Universe and how does it work?

## Commands
``` python openai.py ```

## Technology
- Python 3.5+ (numpy)
- Docker
- Universe 
- Keras

## Theory: Q-learning and reinforcement learning
The main algorithm is based on the concept of Q-learning. Specifically, the algorithm is based on DeepMind's Deep Q-Network (DQN) (Link: https://www.cs.toronto.edu/~vmnih/docs/dqn.pdf)

## Other sources
- Documentation of Gym: https://gym.openai.com/docs/ 
