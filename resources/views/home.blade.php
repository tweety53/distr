@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">

            </div>
        </div>
        <div>
            <form>
                <div class="row">
                    <div class="form-group col-md-2">
                        <label for="mean1">m1:</label>
                        <input type="text" class="form-control" id="mean1">
                    </div>
                    <div class="form-group col-md-2">
                        <label for="variance1">sigma1:</label>
                        <input type="text" class="form-control" id="variance1">
                    </div>
                    <div class="form-group col-md-2">
                        <label for="mean2">m2:</label>
                        <input type="text" class="form-control" id="mean2">
                    </div>
                    <div class="form-group col-md-2">
                        <label for="variance2">sigma2:</label>
                        <input type="text" class="form-control" id="variance2">
                    </div>
                    <div class="form-group col-md-2">
                        <label for="mean3">m3:</label>
                        <input type="text" class="form-control" id="mean3">
                    </div>
                    <div class="form-group col-md-2">
                        <label for="variance3">sigma3:</label>
                        <input type="text" class="form-control" id="variance3">
                    </div>
                    <div class="form-group col-md-2">
                        <label for="alpha1">alpha1:</label>
                        <input type="text" class="form-control" id="alpha1">
                    </div>
                    <div class="form-group col-md-2">
                        <label for="alpha2">alpha2:</label>
                        <input type="text" class="form-control" id="alpha2">
                    </div>
                    <div class="form-group col-md-2">
                        <label for="alpha3">alpha3:</label>
                        <input type="text" class="form-control" id="alpha3">
                    </div>
                </div>

                <a class="btn btn-default" id="build-chart">Build</a>
            </form>
        </div>
        <div class="row">
            <div class="col-md-9">
                <canvas id="myChart" width="800" height="500"></canvas>
            </div>
            <div class="col-md-3 pull-right">
                <div class="panel panel-default">
                    <div class="panel-heading">Probability density function:</div>

                    <div class="panel-body">
                        $$f(x) = {1 \over \sigma  \sqrt{2\pi}}  e^{-1/2{x-\mu \over \sigma}^2}.$$
                    </div>

                </div>

                <div class="panel panel-default">
                    <div class="panel-heading">Cumulative density function:</div>

                    <div class="panel-body">
                        $$F(x) = {\int_{-\infty}^x {e^{-x^2 \over 2} \over \sqrt{2\pi}}}.$$
                    </div>

                </div>

                <div class="panel panel-default">

                    <div class="panel-body">
                        <p class="mx">M(x) =  </p>
                        <p class="dx">D(x) =  </p>
                    </div>

                </div>

            </div>
        </div>


    </div>

@endsection
