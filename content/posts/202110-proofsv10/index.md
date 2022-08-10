---
# Blog post title
title: "CryptoComputeLab announces proofs release version 10.0.0.0"

# Website post date
# format YYYY-MM-DD
date: 2021-10-22

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - "nemo"
  - volker-mische

# If applicable
categories:
  - blog

# If applicable
tags:
  -

# Zero or more of the areas in content/areas
areas:
  - cryptography

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - cryptocomputelab
  - cryptonet

# Not used
draft: false



---

[CryptoComputeLab](https://github.com/protocol/cryptocomputelab)
is very proud to release [Proofs
v10.0.0](https://github.com/filecoin-project/rust-fil-proofs/blob/master/CHANGELOG.md#1000---2021-09-30)!
A lot has changed under the hood in this release, but ultimately, it
comes down to additional GPU support options and better performance
during proving. The far less visible highlights include consolidating a
number of our internal dependencies which started life as forks from
other projects back to the upstream sources. This kind of tooling update
is beneficial for several reasons, including gaining optimizations from
the upstream sources as our code diverged over time, and also making
future updates (e.g. Halo2 work) more realistic. But that is a more
involved topic for another time, so let's stick to the more visible
highlights of this release.

**GPU changes**

This release includes major performance benefits available in the GPU
code paths. The biggest change is that it is now possible to run proofs
with either [OpenCL](https://opencl.org/) or
[CUDA](https://en.wikipedia.org/wiki/CUDA) support. When using
the proofs library, it is as easy as enabling a feature flag called
*cuda*. This is a simple toggle now, but a lot of changes were needed
under the hood to make it an overall smooth experience.!

**Unified GPU API**

CUDA and OpenCL have a lot in common, but they also have subtle
differences -- not only on the API level, but also in the kernels used.
Our idea was to create a library where you write your code once, which
will then work with both CUDA and OpenCL. This new library is called
[rust-gpu-tools](https://github.com/filecoin-project/rust-gpu-tools),
and using it] allows interaction with GPU kernels and buffers
through a unified API.

The biggest difference is related to how memory (that is exclusively
accessible on the GPU) is dealt with. In OpenCL it's called [Local
Buffer
Memory](https://downloads.ti.com/mctools/esd/docs/opencl/memory/buffers.html#local-buffers),
but in CUDA it's [Shared
Memory](https://developer.nvidia.com/blog/using-shared-memory-cuda-cc/).
CUDA has a limitation where you can only have a single memory space per
kernel, and that limitation is inherited by rust-gpu-tools. Although the
API is based on OpenCL's approach, only a single LocalBuffer can be
defined, which is then passed into the Kernel as an argument.

The next hurdle to overcome is that in CUDA it's not possible to pass
in shared memory as a kernel parameter. Not only are the APIs between
CUDA and OpenCL different, but kernel code is as well. Most of the
differences can be solved with simple *\#defines*, as can be seen in the
shared kernel code in
[ec-gpu](https://github.com/filecoin-project/ec-gpu). That leaves
the problem with the shared memory. Unfortunately, this cannot be fully
unified between CUDA and OpenCL because you need to make CUDA specific
changes to the kernel. Though it is an arguably minimal exception, an
example can be found in [bellperson's FFT
kernel](https://github.com/filecoin-project/bellperson/blob/6a24bf6d42105c3f9ad344d512c4637bb5211075/src/gpu/fft/fft.cl#L23-L29).
The end result is that the kernel still has the same number of arguments
for both CUDA and OpenCL. In
[rust-gpu-tools](https://github.com/filecoin-project/rust-gpu-tools)
the API is like the one you would expect from OpenCL, where you pass in
a LocalBuffer. It will then automatically do the right thing for CUDA
and pass on the amount of memory that should be allocated when the
kernel is executed. Ultimately, we now have a unified API.

**GPU Optimizations**

This GPU work had started earlier this year with optimizations for
Nvidia cards, developed by
[Supranational](https://www.supranational.net/). The
optimizations target finite-field arithmetic over prime fields and
elliptic curve arithmetic in general, hence they are in a separate
library called ec-gpu. The generated source code works for both CUDA and
OpenCL, so you can use those in your own kernel and automatically get
maximum performance on CUDA. The reason why some optimizations are not
enabled on Nvidia with OpenCL is that compiling the resulting kernel
would take a very long time (dozens of minutes). The CUDA compiler does
a better job in only a matter of a few minutes. All of our kernels (i.e.
FFT, Multiexp, Poseidon) make use of those optimizations where we see
about 10-20% better performance. On synthetic tests the proving time was
even up to 30% faster.

**Enabling CUDA**

While adding support for CUDA, a lot of code has changed -- even on the
OpenCL code path. As a result we decided to disable the cuda feature by
default in order to make sure there are no performance regressions in
the existing OpenCL implementation. However, we strongly encourage
everyone to give the CUDA implementation a try, and early testing is
showing sustained promise. Currently, testing requires compiling the
proofs from source and setting *FFI_USE_CUDA=1* in the environment at
build time. For more information, see the [Experimental CUDA build
support](https://github.com/filecoin-project/filecoin-ffi#experimental-cuda-build-support)
section of the [Filecoin
FFI](https://github.com/filecoin-project/filecoin-ffi) README.

**Improved proving performance**

By focusing on [very specific
optimizations](https://github.com/filecoin-project/bellperson/issues/220),
we've increased proving performance in v10.0.0 by as much as 40-50%.
Some of the key improvements were in the
[bellperson](https://github.com/filecoin-project/bellperson)
library and include the ability to use multiple GPUs for FFTs, optimized
linear combination routines, further parallelized parameter loading, and
optimized generation of exponents for GPU multiexp steps. The result is
that the overall Filecoin mining Commit Phase 2 stage is now \~1.7x
faster compared to the 9.0.2 release. Specifically, we have observed on
our test hardware that the time decreased from about 16 minutes to under
9.5 minutes when sealing a 32 GiB sector. We are still gathering
performance numbers from the community helping us to test this:for more
information, [stay tuned
here](https://github.com/filecoin-project/lotus/discussions/7443)!

Here are more complete results that our team has gathered for the
v10.0.0 release compared to the v9.0.2 release:

<table class="table-fixed">
<tbody>
<tr class="odd">
<td class="w-1/2"><strong>Mining Operation (32GiB sector)</strong></td>
<td class="w-1/4"><strong>Proofs v10.0.0 CUDA</strong></td>
<td class="w-1/4"><strong>Proofs v10.0.0 OpenCL</strong></td>
<td class="w-1/4"><strong>Proofs v9.0.2 OpenCL</strong></td>
</tr>
<tr class="even">
<td>Commit Phase 2 (milliseconds)</td>
<td>564,797</td>
<td>680,153</td>
<td>974,893</td>
</tr>
<tr class="odd">
<td>Window PoSt (milliseconds)</td>
<td>110,875</td>
<td>124,998</td>
<td>159,908</td>
</tr>
<tr class="even">
<td>Verify Window PoSt (milliseconds)</td>
<td>6</td>
<td>7</td>
<td>1,959</td>
</tr>
</tbody>
</table>


<p>&nbsp</p>
<p>&nbsp</p>

<center>{{< figure src="/images/cryptocomputelab/cryptocomputelab-streamline-temp.png" alt=CryptoComputeLab" link="/research/groups/cryptocomputelab/" width="75px" >}}</center>

<center style=font-size:11pt><i> We at CryptoComputeLab welcome further discussion of our research topics,  and we're always on the lookout for  opportunities to answer questions and develop collaborations. Please reach out via email (<a href="mailto:research@protocol.ai">research@protocol.ai</a>) to start the conversation! If you’re interested in working with us on issues at the intersection of cryptography, high-performance computing, and programming language design, please contribute to the Open Problems in our <a href ="https://github.com/protocol/research">Research Repo</a> or discuss new problems in our <a href ="https://github.com/protocol/CryptoComputeLab">CryptoComputeLab repo</a> and check out our <a href ="https://jobs.lever.co/protocol?team=Research%20Development"> Open Positions</a>.
</i></center>
