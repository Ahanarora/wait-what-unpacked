
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Calendar } from "lucide-react";

type TimeRange = 'daily' | 'weekly' | 'monthly';

interface TimeFilterProps {
  activeTimeRange: TimeRange;
  onSelectTimeRange: (range: TimeRange) => void;
}

const TimeFilter = ({ activeTimeRange, onSelectTimeRange }: TimeFilterProps) => {
  return (
    <div className="flex items-center justify-center mb-6">
      <ToggleGroup type="single" value={activeTimeRange} onValueChange={(value) => onSelectTimeRange(value as TimeRange)}>
        <ToggleGroupItem value="daily" aria-label="Toggle daily">
          <Calendar className="mr-2 h-4 w-4" />
          Daily
        </ToggleGroupItem>
        <ToggleGroupItem value="weekly" aria-label="Toggle weekly">
          <Calendar className="mr-2 h-4 w-4" />
          Weekly
        </ToggleGroupItem>
        <ToggleGroupItem value="monthly" aria-label="Toggle monthly">
          <Calendar className="mr-2 h-4 w-4" />
          Monthly
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default TimeFilter;
