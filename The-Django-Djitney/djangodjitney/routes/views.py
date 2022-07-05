from django.shortcuts import render
from .models import Line, Station, Stop
from .forms import  StopForm, LineForm, StationForm
# Add your imports below:
from django.views.generic import ListView,TemplateView
from django.views.generic.edit import CreateView,UpdateView,DeleteView

class HomeView(TemplateView):
  template_name = "routes/home.html"

  def get_context_data(self):
    context = super().get_context_data()
    context["lines"] = Line.objects.all()
    context["stations"] = Station.objects.all()
    context["stops"] = Stop.objects.all()
    return context

# Create your views here.
class LinesView(ListView):
  model = Line
  template_name = "routes/lines.html"

class StationsView(ListView):
  template_name = "routes/stations.html"
  model = Station

class StopsView(ListView):
  template_name = "routes/stops.html"
  model = Stop

class UpdateStopView(UpdateView):
  template_name = "routes/update_stop.html"
  model = Stop
  form_class= StationForm


class CreateStationView(CreateView):
   template_name = "routes/add_station.html"
   model = Station
   form_class= StationForm
  

class CreateLineView(CreateView):
  template_name = "routes/add_line.html"
  model = Line
  form_class = LineForm

class CreateStopView(CreateView):
  template_name = "routes/add_stop.html"
  model = Stop
  form_class = StopForm


class UpdateLineView(UpdateView):
  template_name = "routes/update_line.html"
  model = Line
  form_class = LineForm

class updateStationView(UpdateView):
  template_name = "routes/update_station.html"
  model = Station
  form_class = StationForm


class DeleteLineView(DeleteView):
  model = Line
  template_name = "routes/delete_line.html"
  success_url = "/lines"

class DeleteStationView(DeleteView):
  model = Station
  template_name = "routes/delete_station.html"
  success_url = "/stations/"

class DeleteStopView(DeleteView):
  template_name = "routes/delete_stop.html"
  model = Stop
  success_url = '/stops'


  

