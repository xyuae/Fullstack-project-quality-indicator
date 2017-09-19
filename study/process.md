## Process concept
- A process is an isntance of a program in execution
- Batch systems work in terms of 'jobs'. Many odern process concepts are still expressed interms of jobs. (job scheduling), and the two terms are often used interchangeably.

### The process
- Process memory is divided into four sections
    - The text session comprises the compiled program code, read in from nonnon-volatile storage 
    - The data section stores global and static variables, allocated and initialized prior to executing main
    - The heap is used for dynamic memory allocation, and is managed via calls to new, delete, malloc, free
    - The stack is used for local variables. Space on the sstack is reserved for local variables when they are declared ( at function entrance or elsewhere, depending on the language ), and the space is freed up when the variables go out of scope. Note that the stack is also used for function return values, and the excat mechnism of stack management may be language specific.
- When processes are swaped out of memory and later restored, additional information must also be stored and restored. Key among them are the program counter and the value of all program registers.

## Process State
- Processes may be in one of 5 states
    - New: the process is in the stage of being created
    - Ready: the process has all the resources available that it needs to run, but the CPU is not currently working on this process instructions.
    - Running: The CPU is working on this process's instruction
    - Waiting: The process canno trun at the moment, because it is waiting for some resource to become available or for some event to occur. For example the process may be waiting for keyboard input, disk access request, inter-process messages, a timer to go off, or a child process to finish.
    - Terminated: The process has completed
- THe load average reported by the 'w' command indicate the avarage number of processes in the Ready state over the last 1, 5, and 15 minutews, i.e. processes who have everything they need to run but cannot because the CPU is busy doign something else.

### Process Control Block
For each process there is a Process Control Block, PCB, which stores the following types of process-specific information.  
- Process State: running, waiting, etc
- Process ID: and parent process ID
CPU registers and Program counter: These need to be saved and restored when swapping processes in and out of the CPU
- CPU scheduling information: Such as priority information and ponters to scheduling queues.
- Memory-Management information: page tables or segment tables
- Accounting inforamtion: user and kernal CPU time consumed, account numbers, limits
- I/O Status information: devices allocated, open file tables
e.x. process 0 interrups or system call, save state into PCB0, reload state from PCB1, executing P1, interrupt or system call, p1 sace state into PCB1

### Process representation in Linux
The process control block in the Linux operating system is represetned by teh C strcture task_struct. This structure contains all the necessary information for representing a process, including hte state of the process, scheduling and memory-management information, list of open files, and pointers to the process's parent and of its children. (A process's parent is the process that created it; it's children are any processes that it creates) Some of these fieleds include
```c++
pid_t pid; /* process identifier */
long state; /* state of the process */
unsiged int time_slice; /* scheduling information */
struct task_struct *parent;
struct list_head children; /* this process's children */ 
struct files_struct *files  /* list of open fiels */
strcut mm_struct *mm; /* address space of this process */
```
For example, the state of a process is represneted by the field lng state in this structure. Within the Linux kernal, all active processes are represented using a doubly linked list of task_strcut, and the kernel maintains a pointer -current- to the process currently executing on the system. 
As an illustration of how the kenrel might manipulate one of the fields in the task_struct for a specified process, let's assume the sysetm would like to change the state of the process currently running to the value new_state. It current is a pointer to the process currently executing, its state is changed with the following
## Process Scheduling
The two main objectives of the process scheduling system are to keep the CPU busy at all times and to deliver 'acceptable' response times for all programs, particularly for interactive ones. 
The process scheduler must meet these objectives by implementing suitable policies for swapping processes in and out of the CPU. (Note that these objectives can be conflicting. In particular, every time the system steps in to swap processes it takes up time on the CPU to do so, which is thereby 'lost' from doing any useful productive work )
### Scheduling Queues
- All processes are stored in the job queue
- Processes in the Ready state are placed in the ready queue.
- Processes watiign for a device to become available or to deliver data are placed in device queues. There is generally a separate device queue for each device.
- Other queues may also be created and used as needed.
