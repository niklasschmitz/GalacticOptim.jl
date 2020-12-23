var documenterSearchIndex = {"docs":
[{"location":"local_optimizers/local_gradient/#Local-Gradient-Based-Optimization","page":"Local Gradient-Based Optimization","title":"Local Gradient-Based Optimization","text":"","category":"section"},{"location":"local_optimizers/local_gradient/#Recommended-Methods","page":"Local Gradient-Based Optimization","title":"Recommended Methods","text":"","category":"section"},{"location":"local_optimizers/local_gradient/","page":"Local Gradient-Based Optimization","title":"Local Gradient-Based Optimization","text":"ADAM() is a good default with decent convergence rate. BFGS() can converge faster but is more prone to hitting bad local optima. LBFGS() requires less memory than BFGS and thus can have better scaling.","category":"page"},{"location":"local_optimizers/local_gradient/#Flux.jl","page":"Local Gradient-Based Optimization","title":"Flux.jl","text":"","category":"section"},{"location":"local_optimizers/local_gradient/","page":"Local Gradient-Based Optimization","title":"Local Gradient-Based Optimization","text":"Flux.Optimise.Descent: Classic gradient descent optimizer with learning rate\nsolve(problem, Descent(η))\nη is the learning rate\ndefaults to: η = 0.1\nFlux.Optimise.Momentum: Classic gradient descent optimizer with learning rate and momentum\nsolve(problem, Momentum(η, ρ))\nη is the learning rate\nρ is the momentum\ndefaults to: η = 0.01, ρ = 0.9\nFlux.Optimise.Nesterov: Gradient descent optimizer with learning rate and Nesterov momentum\nsolve(problem, Nesterov(η, ρ))\nη is the learning rate\nρ is the Nesterov momentum\ndefaults to: η = 0.01, ρ = 0.9\nFlux.Optimise.RMSProp: RMSProp optimizer\nsolve(problem, RMSProp(η, ρ))\nη is the learning rate\nρ is the momentum\ndefaults to: η = 0.001, ρ = 0.9\nFlux.Optimise.ADAM: ADAM optimizer\nsolve(problem, ADAM(η, β::Tuple))\nη is the learning rate\nβ::Tuple is the decay of momentums\ndefaults to: η = 0.001, β::Tuple = (0.9, 0.999)\nFlux.Optimise.RADAM: Rectified ADAM optimizer\nsolve(problem, RADAM(η, β::Tuple))\nη is the learning rate\nβ::Tuple is the decay of momentums\ndefaults to: η = 0.001, β::Tuple = (0.9, 0.999)\nFlux.Optimise.AdaMax: AdaMax optimizer\nsolve(problem, AdaMax(η, β::Tuple))\nη is the learning rate\nβ::Tuple is the decay of momentums\ndefaults to: η = 0.001, β::Tuple = (0.9, 0.999)\nFlux.Optimise.ADAGRad: ADAGrad optimizer\nsolve(problem, ADAGrad(η))\nη is the learning rate\ndefaults to: η = 0.1\nFlux.Optimise.ADADelta: ADADelta optimizer\nsolve(problem, ADADelta(ρ))\nρ is the gradient decay factor\ndefaults to: ρ = 0.9\nFlux.Optimise.AMSGrad: AMSGrad optimizer\nsolve(problem, AMSGrad(η, β::Tuple))\nη is the learning rate\nβ::Tuple is the decay of momentums\ndefaults to: η = 0.001, β::Tuple = (0.9, 0.999)\nFlux.Optimise.NADAM: Nesterov variant of the ADAM optimizer\nsolve(problem, NADAM(η, β::Tuple))\nη is the learning rate\nβ::Tuple is the decay of momentums\ndefaults to: η = 0.001, β::Tuple = (0.9, 0.999)\nFlux.Optimise.ADAMW: ADAMW optimizer\nsolve(problem, ADAMW(η, β::Tuple))\nη is the learning rate\nβ::Tuple is the decay of momentums\ndecay is the decay to weights\ndefaults to: η = 0.001, β::Tuple = (0.9, 0.999), decay = 0","category":"page"},{"location":"local_optimizers/local_gradient/#Optim.jl","page":"Local Gradient-Based Optimization","title":"Optim.jl","text":"","category":"section"},{"location":"local_optimizers/local_gradient/","page":"Local Gradient-Based Optimization","title":"Local Gradient-Based Optimization","text":"Optim.ConjugateGradient: Conjugate Gradient Descent\nsolve(problem, ConjugateGradient(alphaguess, linesearch, eta, P, precondprep))\nalphaguess computes the initial step length (for more information, consult this source and this example)\navailable initial step length procedures:\nInitialPrevious\nInitialStatic\nInitialHagerZhang\nInitialQuadratic\nInitialConstantChange\nlinesearch specifies the line search algorithm (for more information, consult this source and this example)\navailable line search algorithms:\nHaegerZhang\nMoreThuente\nBackTracking\nStrongWolfe\nStatic\neta determines the next step direction\nP is an optional preconditioner (for more information, see this source)\nprecondpred is used to update P as the state variable x changes\ndefaults to:\njulia   alphaguess = LineSearches.InitialHagerZhang(),   linesearch = LineSearches.HagerZhang(),   eta = 0.4,   P = nothing,   precondprep = (P, x) -> nothing\nOptim.GradientDescent: Gradient Descent (a quasi-Newton solver)\nsolve(problem, GradientDescent(alphaguess, linesearch, P, precondprep))\nalphaguess computes the initial step length (for more information, consult this source and this example)\navailable initial step length procedures:\nInitialPrevious\nInitialStatic\nInitialHagerZhang\nInitialQuadratic\nInitialConstantChange\nlinesearch specifies the line search algorithm (for more information, consult this source and this example)\navailable line search algorithms:\nHaegerZhang\nMoreThuente\nBackTracking\nStrongWolfe\nStatic\nP is an optional preconditioner (for more information, see this source)\nprecondpred is used to update P as the state variable x changes\ndefaults to:\njulia   alphaguess = LineSearches.InitialPrevious(),   linesearch = LineSearches.HagerZhang(),   P = nothing,   precondprep = (P, x) -> nothing\nOptim.BFGS: Broyden-Fletcher-Goldfarb-Shanno algorithm\nsolve(problem, BFGS(alpaguess, linesearch, initial_invH, initial_stepnorm, manifold))\nalphaguess computes the initial step length (for more information, consult this source and this example)\navailable initial step length procedures:\nInitialPrevious\nInitialStatic\nInitialHagerZhang\nInitialQuadratic\nInitialConstantChange\nlinesearch specifies the line search algorithm (for more information, consult this source and this example)\navailable line search algorithms:\nHaegerZhang\nMoreThuente\nBackTracking\nStrongWolfe\nStatic\ninitial_invH specifies an optional initial matrix\ninitial_stepnorm determines that initial_invH is an identity matrix scaled by the value of initial_stepnorm multiplied by the sup-norm of the gradient at the initial point\nmanifold specifies a (Riemannian) manifold on which the function is to be minimized (for more information, consult this source)\navailable manifolds:\nFlat\nSphere\nStiefel\nmeta-manifolds:\nPowerManifold\nProductManifold\ncustom manifolds\ndefaults to: alphaguess = LineSearches.InitialStatic(), linesearch = LineSearches.HagerZhang(), initial_invH = nothing, initial_stepnorm = nothing, manifold = Flat()\nOptim.LBFGS: Limited-memory Broyden-Fletcher-Goldfarb-Shanno algorithm","category":"page"},{"location":"local_optimizers/local_gradient/#NLopt.jl","page":"Local Gradient-Based Optimization","title":"NLopt.jl","text":"","category":"section"},{"location":"local_optimizers/local_hessian_free/#Local-Hessian-Free-Second-Order-Optimization","page":"Local Hessian-Free Second Order Optimization","title":"Local Hessian-Free Second Order Optimization","text":"","category":"section"},{"location":"local_optimizers/local_hessian_free/","page":"Local Hessian-Free Second Order Optimization","title":"Local Hessian-Free Second Order Optimization","text":"Hessian-free methods are methods which perform second order optimization by direct computation of Hessian-vector products (Hv) without requiring the construction of the full Hessian. As such, these methods can perform well for large second order optimization problems, but can require special case when considering conditioning of the Hessian.","category":"page"},{"location":"local_optimizers/local_hessian_free/#Recommended-Methods","page":"Local Hessian-Free Second Order Optimization","title":"Recommended Methods","text":"","category":"section"},{"location":"local_optimizers/local_hessian_free/","page":"Local Hessian-Free Second Order Optimization","title":"Local Hessian-Free Second Order Optimization","text":"KrylovTrustRegion","category":"page"},{"location":"local_optimizers/local_hessian_free/#Optim.jl","page":"Local Hessian-Free Second Order Optimization","title":"Optim.jl","text":"","category":"section"},{"location":"local_optimizers/local_hessian_free/","page":"Local Hessian-Free Second Order Optimization","title":"Local Hessian-Free Second Order Optimization","text":"KrylovTrustRegion","category":"page"},{"location":"basics/problem/#Defining-OptimizationProblems","page":"OptimizationProblem","title":"Defining OptimizationProblems","text":"","category":"section"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"All optimizations start by defining an OptimizationProblem as follows:","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"OptimizationProblem(f, x, p = DiffEqBase.NullParameters(),;\n                    lb = nothing,\n                    ub = nothing,\n                    lcons = nothing,\n                    ucons = nothing,\n                    kwargs...)","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"Formally, the OptimizationProblem finds the minimum of f(x,p) with an initial condition x. The parameters p are optional. lb and ub are arrays matching the size of x which stand for the lower and upper bounds of x respectively.","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"f is an OptimizationFunction, as defined below. If f is a standard Julia function, it is automatically converted into an OptimizationFunction with NoAD(), i.e. no automatic generation of the derivative functions.","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"Any extra keyword arguments are captured to be sent to the optimizers.","category":"page"},{"location":"basics/problem/#OptimizationFunction","page":"OptimizationProblem","title":"OptimizationFunction","text":"","category":"section"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"The OptimizationFunction type is a function type that holds all of the extra differentiation data required to do fast and accurate optimization. The signature for the constructor is:","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"OptimizationFunction{iip}(f,adtype=NoAD();\n                          grad=nothing,\n                          hess=nothing,\n                          hv=nothing,\n                          cons=nothing,\n                          cons_j=nothing,\n                          cons_h=nothing)","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"The keyword arguments are as follows:","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"grad: Gradient\nhess: Hessian\nhv: Hessian vector products hv(du,u,p,t,v) = H*v\ncons: Constraint function\ncons_j\ncons_h","category":"page"},{"location":"basics/problem/#Defining-Optimization-Functions-Via-AD","page":"OptimizationProblem","title":"Defining Optimization Functions Via AD","text":"","category":"section"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"While using the keyword arguments gives the user control over defining all of the possible functions, the simplest way to handle the generation of an OptimizationFunction is by specifying an AD type. By doing so, this will automatically fill in all of the extra functions. For example,","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"OptimizationFunction(f,AutoZygote())","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"will use Zygote.jl to define all of the necessary functions. Note that if any functions are defined directly, the auto-AD definition does not overwrite the user's choice.","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"The choices for the auto-AD fill-ins with quick descriptions are:","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"AutoForwardDiff(): The fastest choice for small optimizations\nAutoReverseDiff(compile=false): A fast choice for large scalar optimizations\nAutoTracker(): Like ReverseDiff but GPU-compatible\nAutoZygote(): The fastest choice\nAutoFiniteDiff(): Finite differencing, not optimal but always applicable\nAutoModelingToolkit(): The fastest choice for large scalar optimizations","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"The following sections describe the Auto-AD choices in detail.","category":"page"},{"location":"basics/problem/#AutoForwardDiff","page":"OptimizationProblem","title":"AutoForwardDiff","text":"","category":"section"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"This uses the ForwardDiff.jl package. It is the fastest choice for small systems, especially with heavy scalar interactions. It is easy to use and compatible with most pure is Julia functions which have loose type restrictions. However, because it's forward-mode, it scales poorly in comparison to other AD choices. Hessian construction is suboptimal as it uses the forward-over-forward approach.","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"Compatible with GPUs\nCompatible with Hessian-based optimization\nCompatible with Hv-based optimization\nCompatible with constraints","category":"page"},{"location":"basics/problem/#AutoReverseDiff","page":"OptimizationProblem","title":"AutoReverseDiff","text":"","category":"section"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"This uses the ReverseDiff.jl package. AutoReverseDiff has a default argument, compile, which denotes whether the reverse pass should be compiled. compile should only be set to true if f contains no branches (if statements, while loops) otherwise it can produce incorrect derivatives!.","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"AutoReverseDiff is generally applicable to many pure Julia codes, and with compile=true it is one of the fastest options on code with heavy scalar interactions. Hessian calculations are fast by mixing ForwardDiff with ReverseDiff for forward-over-reverse. However, its performance can falter when compile=false.","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"Not compatible with GPUs\nCompatible with Hessian-based optimization by mixing with ForwardDiff\nCompatible with Hv-based optimization by mixing with ForwardDiff\nNot compatible with constraint functions","category":"page"},{"location":"basics/problem/#AutoTracker","page":"OptimizationProblem","title":"AutoTracker","text":"","category":"section"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"This uses the Tracker.jl package. Generally slower than ReverseDiff, it is generally applicable to many pure Julia codes.","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"Compatible with GPUs\nNot compatible with Hessian-based optimization\nNot compatible with Hv-based optimization\nNot compatible with constraint functions","category":"page"},{"location":"basics/problem/#AutoZygote","page":"OptimizationProblem","title":"AutoZygote","text":"","category":"section"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"This uses the Zygote.jl package. This is the staple reverse-mode AD that handles a large portion of Julia with good efficiency. Hessian construction is fast via forward-over-reverse mixing ForwardDiff.jl with Zygote.jl","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"Compatible with GPUs\nCompatible with Hessian-based optimization via ForwardDiff\nCompatible with Hv-based optimization via ForwardDiff\nNot compatible with constraint functions","category":"page"},{"location":"basics/problem/#AutoFiniteDiff","page":"OptimizationProblem","title":"AutoFiniteDiff","text":"","category":"section"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"This uses FiniteDiff.jl. While to necessarily the most efficient in any case, this is the only choice that doesn't require the f function to be automatically differentiable, which means it applies to any choice. However, because it's using finite differencing, one needs to be careful as this procedure introduces numerical error into the derivative estimates.","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"Compatible with GPUs\nCompatible with Hessian-based optimization\nCompatible with Hv-based optimization\nNot compatible with constraint functions","category":"page"},{"location":"basics/problem/#AutoModelingToolkit","page":"OptimizationProblem","title":"AutoModelingToolkit","text":"","category":"section"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"This uses the ModelingToolkit.jl symbolic system for automatically converting the f function into a symbolic equation and uses symbolic differentiation in order to generate a fast derivative code. Note that this will also compile a new version of your f function that is automatically optimized. In this choice, it defaults to grad=false and hess=false, and one must change these to true in order to enable the symbolic derivation. Future updates will enable automatic parallelization and sparsity in the derived functions. This can be the fastest for many systems, especially when parallelization and sparsity are required, but can take the longest to generate.","category":"page"},{"location":"basics/problem/","page":"OptimizationProblem","title":"OptimizationProblem","text":"Not compatible with GPUs\nCompatible with Hessian-based optimization\nNot compatible with Hv-based optimization\nNot compatible with constraint functions","category":"page"},{"location":"local_optimizers/local_derivative_free/#Local-Derivative-Free-Optimization","page":"Local Derivative-Free Optimization","title":"Local Derivative-Free Optimization","text":"","category":"section"},{"location":"local_optimizers/local_derivative_free/","page":"Local Derivative-Free Optimization","title":"Local Derivative-Free Optimization","text":"Derivative-free optimizers are optimizers that can be used even in cases where no derivatives or automatic differentiation is specified. While they tend to be less efficient than derivative-based optimizers, they can be easily applied to cases where defining derivatives is difficult.","category":"page"},{"location":"local_optimizers/local_derivative_free/#Recommended-Methods","page":"Local Derivative-Free Optimization","title":"Recommended Methods","text":"","category":"section"},{"location":"local_optimizers/local_derivative_free/","page":"Local Derivative-Free Optimization","title":"Local Derivative-Free Optimization","text":"NLOpt COBYLA","category":"page"},{"location":"local_optimizers/local_derivative_free/#Optim.jl","page":"Local Derivative-Free Optimization","title":"Optim.jl","text":"","category":"section"},{"location":"local_optimizers/local_derivative_free/","page":"Local Derivative-Free Optimization","title":"Local Derivative-Free Optimization","text":"Optim.NelderMead: Nelder-Mead optimizer\nsolve(problem, NelderMead(parameters, initial_simplex))\nparameters = AdaptiveParameters() or parameters = FixedParameters()\ninitial_simplex = AffineSimplexer()\ndefaults to: parameters = AdaptiveParameters(), initial_simplex = AffineSimplexer()\nOptim.SimulatedAnnealing: Simulated Annealing\nsolve(problem, SimulatedAnnealing(neighbor, T, p))\nneighbor is a mutating function of the current and proposed x\nT is a function of the current iteration that returns a temperature\np is a function of the current temperature\ndefaults to: neighbor = default_neighbor!, T = default_temperature, p = kirkpatrick","category":"page"},{"location":"local_optimizers/local_derivative_free/#NLopt.jl","page":"Local Derivative-Free Optimization","title":"NLopt.jl","text":"","category":"section"},{"location":"local_optimizers/local_hessian/#Local-Hessian-Based-Second-Order-Optimization","page":"Local Hessian-Based Second Order Optimization","title":"Local Hessian-Based Second Order Optimization","text":"","category":"section"},{"location":"local_optimizers/local_hessian/","page":"Local Hessian-Based Second Order Optimization","title":"Local Hessian-Based Second Order Optimization","text":"Hessian-based optimization methods are second order optimization methods which use the direct computation of the Hessian. These can converge faster but require fast and accurate methods for calulating the Hessian in order to be appropriate.","category":"page"},{"location":"local_optimizers/local_hessian/#Recommended-Methods","page":"Local Hessian-Based Second Order Optimization","title":"Recommended Methods","text":"","category":"section"},{"location":"local_optimizers/local_hessian/","page":"Local Hessian-Based Second Order Optimization","title":"Local Hessian-Based Second Order Optimization","text":"NewtonTrustRegion","category":"page"},{"location":"local_optimizers/local_hessian/#Optim.jl","page":"Local Hessian-Based Second Order Optimization","title":"Optim.jl","text":"","category":"section"},{"location":"local_optimizers/local_hessian/","page":"Local Hessian-Based Second Order Optimization","title":"Local Hessian-Based Second Order Optimization","text":"NewtonTrustRegion\nOptim.Newton","category":"page"},{"location":"global_optimizers/global/#Global-Unconstrained-Optimizers","page":"Global Unconstrained Optimizers","title":"Global Unconstrained Optimizers","text":"","category":"section"},{"location":"global_optimizers/global/","page":"Global Unconstrained Optimizers","title":"Global Unconstrained Optimizers","text":"These methods are performing global optimization on problems without constraint equations.","category":"page"},{"location":"global_optimizers/global/#Recommended-Methods","page":"Global Unconstrained Optimizers","title":"Recommended Methods","text":"","category":"section"},{"location":"global_optimizers/global/","page":"Global Unconstrained Optimizers","title":"Global Unconstrained Optimizers","text":"Good benchmarks Recommend BBO().","category":"page"},{"location":"global_optimizers/global/#Optim.jl","page":"Global Unconstrained Optimizers","title":"Optim.jl","text":"","category":"section"},{"location":"global_optimizers/global/","page":"Global Unconstrained Optimizers","title":"Global Unconstrained Optimizers","text":"Optim.ParticleSwarm: Particle Swarm Optimization\nsolve(problem, ParticleSwarm(lower, upper, n_particles))\nlower/upper are vectors of lower/upper bounds respectively\nn_particles is the number of particles in the swarm\ndefaults to: lower = [], upper = [], n_particles = 0","category":"page"},{"location":"global_optimizers/global/#BlackBoxOptim.jl","page":"Global Unconstrained Optimizers","title":"BlackBoxOptim.jl","text":"","category":"section"},{"location":"global_optimizers/global/","page":"Global Unconstrained Optimizers","title":"Global Unconstrained Optimizers","text":"BlackBoxOptim: (Meta-)heuristic/stochastic algorithms\nsolve(problem, BBO(method))\nthe name of the method must be preceded by :, for example: :de_rand_2_bin\nin GalacticOptim.jl, BBO() defaults to the recommended adaptive_de_rand_1_bin_radiuslimited\nthe available methods are listed here","category":"page"},{"location":"global_optimizers/global/#QuadDIRECT.jl","page":"Global Unconstrained Optimizers","title":"QuadDIRECT.jl","text":"","category":"section"},{"location":"global_optimizers/global/","page":"Global Unconstrained Optimizers","title":"Global Unconstrained Optimizers","text":"QuadDIRECT: QuadDIRECT algorithm (inspired by DIRECT and MCS)\nsolve(problem, QuadDirect(), splits)\nsplits is a list of 3-vectors with initial locations at which to evaluate the function (the values must be in strictly increasing order and lie within the specified bounds), for instance:\njulia   prob = GalacticOptim.OptimizationProblem(f, x0, p, lb=[-3, -2], ub=[3, 2])   solve(prob, QuadDirect(), splits = ([-2, 0, 2], [-1, 0, 1]))\nalso note that QuadDIRECT should (for now) be installed by doing: ] add https://github.com/timholy/QuadDIRECT.jl.git","category":"page"},{"location":"global_optimizers/global/#Evoluationary.jl","page":"Global Unconstrained Optimizers","title":"Evoluationary.jl","text":"","category":"section"},{"location":"global_optimizers/global/","page":"Global Unconstrained Optimizers","title":"Global Unconstrained Optimizers","text":"Evolutionary.GA: Genetic Algorithm optimizer\nEvolutionary.ES: Evolution Strategy algorithm\nEvolutionary.CMAES: Covariance Matrix Adaptation Evolution Strategy algorithm","category":"page"},{"location":"global_optimizers/global/#CMAEvolutionStrategy.jl","page":"Global Unconstrained Optimizers","title":"CMAEvolutionStrategy.jl","text":"","category":"section"},{"location":"global_optimizers/global/","page":"Global Unconstrained Optimizers","title":"Global Unconstrained Optimizers","text":"CMAEvolutionStrategy: Covariance Matrix Adaptation Evolution Strategy algorithm","category":"page"},{"location":"global_optimizers/global_constrained/#Global-Constrained-Optimization","page":"Global Constrained Optimization","title":"Global Constrained Optimization","text":"","category":"section"},{"location":"global_optimizers/global_constrained/#Recommended-Methods","page":"Global Constrained Optimization","title":"Recommended Methods","text":"","category":"section"},{"location":"global_optimizers/global_constrained/","page":"Global Constrained Optimization","title":"Global Constrained Optimization","text":"SAMIN or NLopt.GNISRES","category":"page"},{"location":"global_optimizers/global_constrained/#Optim.jl","page":"Global Constrained Optimization","title":"Optim.jl","text":"","category":"section"},{"location":"global_optimizers/global_constrained/","page":"Global Constrained Optimization","title":"Global Constrained Optimization","text":"Optim.SAMIN: Simulated Annealing with bounds\nsolve(problem, SAMIN(nt, ns, rt, neps, f_tol, x_tol, coverage_ok, verbosity))\ndefaults to:\n```julia   SAMIN(; nt::Int = 5  # reduce temperature every ntnsdim(xinit) evaluations           ns::Int = 5  # adjust bounds every ns*dim(xinit) evaluations           rt::T = 0.9  # geometric temperature reduction factor: when temp changes, new temp is t=rt*t           neps::Int = 5  # number of previous best values the final result is compared to           ftol::T = 1e-12  # the required tolerance level for function value comparisons           xtol::T = 1e-6  # the required tolerance level for x           coverage_ok::Bool = false,  # if false, increase temperature until initial parameter space is covered           verbosity::Int = 0)  # scalar: 0, 1, 2 or 3 (default = 0).\ncopied verbatim from https://julianlsolvers.github.io/Optim.jl/stable/#algo/samin/#constructor\n```","category":"page"},{"location":"global_optimizers/global_constrained/#NLopt.jl","page":"Global Constrained Optimization","title":"NLopt.jl","text":"","category":"section"},{"location":"basics/solve/#Common-Solver-Options","page":"Solver Options","title":"Common Solver Options","text":"","category":"section"},{"location":"basics/solve/","page":"Solver Options","title":"Solver Options","text":"In GalacticOptim.jl, solving an OptimizationProblem is done via:","category":"page"},{"location":"basics/solve/","page":"Solver Options","title":"Solver Options","text":"solve(prob,alg;kwargs...)","category":"page"},{"location":"basics/solve/","page":"Solver Options","title":"Solver Options","text":"The arguments to solve are common across all of the optimizers. These common arguments are:","category":"page"},{"location":"basics/solve/","page":"Solver Options","title":"Solver Options","text":"maxiters (the maximum number of iterations)\nabstol (absolute tolerance)\nreltol (relative tolerance)","category":"page"},{"location":"tutorials/intro/#Introduction-to-GalacticOptim.jl","page":"Introduction to GalacticOptim.jl","title":"Introduction to GalacticOptim.jl","text":"","category":"section"},{"location":"tutorials/intro/","page":"Introduction to GalacticOptim.jl","title":"Introduction to GalacticOptim.jl","text":"In this tutorial we introduce the basics of GalcticOptim.jl by showing how to easily mix local optimizers from Optim.jl and global optimizers from BlackBoxOptim.jl on the Rosenbrock equation. The simplest copy-pasteable code to get started is the following:","category":"page"},{"location":"tutorials/intro/","page":"Introduction to GalacticOptim.jl","title":"Introduction to GalacticOptim.jl","text":" using GalacticOptim, Optim\n rosenbrock(x,p) =  (p[1] - x[1])^2 + p[2] * (x[2] - x[1]^2)^2\n x0 = zeros(2)\n p  = [1.0,100.0]\n\n prob = OptimizationProblem(rosenbrock,x0,p)\n sol = solve(prob,NelderMead())\n\n\n using BlackBoxOptim\n prob = OptimizationProblem(rosenbrock, x0, p, lb = [-1.0,-1.0], ub = [1.0,1.0])\n sol = solve(prob,BBO())","category":"page"},{"location":"tutorials/intro/","page":"Introduction to GalacticOptim.jl","title":"Introduction to GalacticOptim.jl","text":"Note that Optim.jl is a core dependency of GalaticOptim.jl. However, BlackBoxOptim.jl is not and must already be installed (see the list above).","category":"page"},{"location":"tutorials/intro/","page":"Introduction to GalacticOptim.jl","title":"Introduction to GalacticOptim.jl","text":"Warning: The output of the second optimization task (BBO()) is currently misleading in the sense that it returns Status: failure (reached maximum number of iterations). However, convergence is actually reached and the confusing message stems from the reliance on the Optim.jl output  struct (where the situation of reaching the maximum number of iterations is rightly regarded as a failure). The improved output struct will soon be implemented.","category":"page"},{"location":"tutorials/intro/","page":"Introduction to GalacticOptim.jl","title":"Introduction to GalacticOptim.jl","text":"The output of the first optimization task (with the NelderMead() algorithm) is given below:","category":"page"},{"location":"tutorials/intro/","page":"Introduction to GalacticOptim.jl","title":"Introduction to GalacticOptim.jl","text":"* Status: success\n\n* Candidate solution\n   Final objective value:     3.525527e-09\n\n* Found with\n   Algorithm:     Nelder-Mead\n\n* Convergence measures\n   √(Σ(yᵢ-ȳ)²)/n ≤ 1.0e-08\n\n* Work counters\n   Seconds run:   0  (vs limit Inf)\n   Iterations:    60\n   f(x) calls:    118","category":"page"},{"location":"tutorials/intro/","page":"Introduction to GalacticOptim.jl","title":"Introduction to GalacticOptim.jl","text":"We can also explore other methods in a similar way:","category":"page"},{"location":"tutorials/intro/","page":"Introduction to GalacticOptim.jl","title":"Introduction to GalacticOptim.jl","text":" f = OptimizationFunction(rosenbrock, GalacticOptim.AutoForwardDiff())\n prob = OptimizationProblem(f, x0, p)\n sol = solve(prob,BFGS())","category":"page"},{"location":"tutorials/intro/","page":"Introduction to GalacticOptim.jl","title":"Introduction to GalacticOptim.jl","text":"For instance, the above optimization task produces the following output:","category":"page"},{"location":"tutorials/intro/","page":"Introduction to GalacticOptim.jl","title":"Introduction to GalacticOptim.jl","text":"* Status: success\n\n* Candidate solution\n   Final objective value:     7.645684e-21\n\n* Found with\n   Algorithm:     BFGS\n\n* Convergence measures\n   |x - x'|               = 3.48e-07 ≰ 0.0e+00\n   |x - x'|/|x'|          = 3.48e-07 ≰ 0.0e+00\n   |f(x) - f(x')|         = 6.91e-14 ≰ 0.0e+00\n   |f(x) - f(x')|/|f(x')| = 9.03e+06 ≰ 0.0e+00\n   |g(x)|                 = 2.32e-09 ≤ 1.0e-08\n\n* Work counters\n   Seconds run:   0  (vs limit Inf)\n   Iterations:    16\n   f(x) calls:    53\n   ∇f(x) calls:   53","category":"page"},{"location":"tutorials/intro/","page":"Introduction to GalacticOptim.jl","title":"Introduction to GalacticOptim.jl","text":" prob = OptimizationProblem(f, x0, p, lb = [-1.0,-1.0], ub = [1.0,1.0])\n sol = solve(prob, Fminbox(GradientDescent()))","category":"page"},{"location":"tutorials/intro/","page":"Introduction to GalacticOptim.jl","title":"Introduction to GalacticOptim.jl","text":"The examples clearly demonstrate that GalacticOptim.jl provides an intuitive way of specifying optimization tasks and offers a relatively easy access to a wide range of optimization algorithms.","category":"page"},{"location":"local_optimizers/local_constrained/#Local-Constrained-Optimization","page":"Local Constrained Optimization","title":"Local Constrained Optimization","text":"","category":"section"},{"location":"local_optimizers/local_constrained/","page":"Local Constrained Optimization","title":"Local Constrained Optimization","text":"Local constrained optimization methods are fast methods for finding a local optima which satisfies the desired constraints.","category":"page"},{"location":"local_optimizers/local_constrained/#Recommended-Methods","page":"Local Constrained Optimization","title":"Recommended Methods","text":"","category":"section"},{"location":"local_optimizers/local_constrained/","page":"Local Constrained Optimization","title":"Local Constrained Optimization","text":"IPNewton if derivatives are defined NLOpt otherwise","category":"page"},{"location":"local_optimizers/local_constrained/#Optim.jl","page":"Local Constrained Optimization","title":"Optim.jl","text":"","category":"section"},{"location":"local_optimizers/local_constrained/","page":"Local Constrained Optimization","title":"Local Constrained Optimization","text":"Optim.IPNewton","category":"page"},{"location":"local_optimizers/local_constrained/#NLopt.jl","page":"Local Constrained Optimization","title":"NLopt.jl","text":"","category":"section"},{"location":"local_optimizers/local_constrained/","page":"Local Constrained Optimization","title":"Local Constrained Optimization","text":"A few","category":"page"},{"location":"#GalacticOptim.jl","page":"GalacticOptim.jl: Unified Global Optimization Package","title":"GalacticOptim.jl","text":"","category":"section"},{"location":"","page":"GalacticOptim.jl: Unified Global Optimization Package","title":"GalacticOptim.jl: Unified Global Optimization Package","text":"GalacticOptim.jl is a package with a scope that is beyond your normal global optimization package. GalacticOptim.jl seeks to bring together all of the optimization packages it can find, local and global, into one unified Julia interface. This means, you learn one package and you learn them all! GalacticOptim.jl adds a few high-level features, such as integrating with automatic differentiation, to make its usage fairly simple for most cases, while allowing all of the options in a single unified interface.","category":"page"},{"location":"#Note:-The-package-is-still-in-active-development.","page":"GalacticOptim.jl: Unified Global Optimization Package","title":"Note: The package is still in active development.","text":"","category":"section"},{"location":"#Installation","page":"GalacticOptim.jl: Unified Global Optimization Package","title":"Installation","text":"","category":"section"},{"location":"","page":"GalacticOptim.jl: Unified Global Optimization Package","title":"GalacticOptim.jl: Unified Global Optimization Package","text":"Assuming that you already have Julia correctly installed, it suffices to import GalacticOptim.jl in the standard way:","category":"page"},{"location":"","page":"GalacticOptim.jl: Unified Global Optimization Package","title":"GalacticOptim.jl: Unified Global Optimization Package","text":"import Pkg; Pkg.add(\"GalacticOptim\")","category":"page"},{"location":"","page":"GalacticOptim.jl: Unified Global Optimization Package","title":"GalacticOptim.jl: Unified Global Optimization Package","text":"The packages relevant to the core functionality of GalacticOptim.jl will be imported accordingly and, in most cases, you do not have to worry about the manual installation of dependencies. Below is the list of packages that need to be installed explicitly if you intend to use the specific optimization algorithms offered by them:","category":"page"},{"location":"","page":"GalacticOptim.jl: Unified Global Optimization Package","title":"GalacticOptim.jl: Unified Global Optimization Package","text":"BlackBoxOptim.jl\nNLopt.jl\nMultistartOptimization.jl\nQuadDIRECT.jl\nEvolutionary.jl\nCMAEvolutionStrategy.jl","category":"page"},{"location":"","page":"GalacticOptim.jl: Unified Global Optimization Package","title":"GalacticOptim.jl: Unified Global Optimization Package","text":"The following optimization packages are included by default:","category":"page"},{"location":"","page":"GalacticOptim.jl: Unified Global Optimization Package","title":"GalacticOptim.jl: Unified Global Optimization Package","text":"Flux.jl\nOptim.jl","category":"page"}]
}
