for f in src/types/**/*.d.ts; do mv $f $(dirname $f)/$(basename $f .d.ts).ts; done