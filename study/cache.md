## Least Recently Used (LRU) cache
In computng, cache algorithms (also frequently called cahce repalcement algorithms or cache replacement policies) are optimizing instructions -or algorithms- that a computer program or a hardware maintained structure can follow in order to manage a cache of information stored on the computer. When the cache is full, the algorithm must choose which items to discard to make room for the new ones.

Discrds the least recently used items first. This algorithm requires keeping track of what was used when, which is expensive if one wants to make sure the algorithm always discards the least recently used item. General implementations of this techinique reuqire keeping 'age bits' for cache-lines and track the least recently used cahce-line based on age-bits. In such an implementation, every time a che0line is used, the age of all other cache0lines changes. LRU is actually a family of caching alogirhns with members including 2Q. 
For example, the access sequence is A B C D E F.
Once A B C D gets installed int he blocks with sequence numbers.

## LinkedHashMap
Hash table and lnked list implementation of the Map interface, with predictable iteration order. This implementaion differs from HashMap in that it maintains a doubly-linked list running through all of its entries. This linked list defines the iteration ordering, which is normally the order in which keys were inserted into the map (insertion-order). Note taht isertion order is not affected if a key is re-inserted into the map. (A key k is reinserted into a map m if m.put(k, v) is invoked when m.containsKey(k) returns true imeediately pror to the innovation.)

This implementaion spares its clients from the unspecified, generally chaoitc ordering provided by HashMap(and hashtable), without incurring hte increased cost associated with Treemap. It can be used to produce a copy of a map that has the same order as the original, regardless of the original map;s impolmentaion
```java
void foo (Map m) {
    Map copy = new LinkedHashMap(m);
}
```
This technique is particularly useful if a module takes a map on input, copies it, and later returns results whose order is determined by that of the copy. 
A special constructor is provided to create a linked hash map whose order of iteration is th order in which its entries were last accessed, from least-recetnly accesed to most rectenly(access-order). This kind of map is well-suited to building LRU caches. Invoking the put, putIfAbsent,get, getOrDefault, comute, computeIfAbsent, computeIfPresent, or merge methods results in an access to the corresponding entry (assuming it exists after the invocation completes)
The class provides all of the optional Map operations, and permits null elements. Like HashMap, it provides constant-time perfromance for the basic oeprations, assuming the hash function disperses elements properly among the buckets. Performance is likely to be jsut slightly below that of hashMap, due to the aded expense of maintaining the linked list, with one exception: Iteration over the colection-views of a linkedHashMap requires time proportional to the size of the map, regardless of its capacity. 
To prevent accidental unsynchronized access to the map, wrap the constructor with Collections.synchronizedMap method:
```java
Map m = Collections.synchronizedMap(new LinkedHashMap());
```
