## Being Scalable
Scalabililty is a system's ability to expand along three axis:
1. size(e.g., adding users and resources)
2. geograph(e.g., users on different continents)
3. administration(e.g., multiple independent admins)

Scaling techniques: hinding communication latencies.

## Memcache
Memcached is a high-perofrmance, distributed memory object caching system. In other words, memcached helps you increase application performance by caching data in memory. Using memcached to load data instead of a database or file sytem can have a major impact on your applications performance.

### Implementing with Zend Framework
When you've decided to use Memcached, integrating it with the Zend framework is fairly straightforwrd, especially if you are familiar with basic caching with the Zend Framework. of course, you need to have memcached installed and running on your server first. When it's up and running, you simply use the factory method of the Zend_Cache class to create your caching object, and pass it some configuration parameters.

## Theoretician's perspective
Shared memroy paradigm: threads communicate by accessign shared variables. used heavily for solving CPU-intensive pro                                                                                                                                                                                                                                                          blems. often associated by practitioners with parallel computing.
Message passing paradigm:
processes communicate by sending and reciiving messge over a network. Used heavily for solving resource sharing and coordinator
Cluster computing sytems
Cluster computing frameworks distribute CPU or I/O intensive jobs acrosss multiple servers.
Transaction processing sytems: Distributed transaction are coordinated by a transactio processing monitor. 
- Layered architecture
- Object-based architecture: components are more loosely organized in an object-based architecure. APIs such as java remote method invocation allow remote object referencces and method calls.

## Redis
Redis supports several more complex data strucutes. The first one is a list. A list is a series of ordered values. some of the important commnds for interacting wth lists are RPUSH, LPUSH, LRANGE, LPOP and RPOP.
RPUSH puts the new value at the end of the list. 
LLEN returns the current length of the list. LPOP removes the first element from the list and returns it. RPOP removes the last element form the list and returns it.  